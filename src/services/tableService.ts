import { PERCENTILE_LIMIT } from '@/utils/consts';
import { idGeneratorService } from './idGeneratorService';
import { randomNumberService } from './randomNumberService';
import { statisticService } from './statisticService';

class Table {
  public tableHeaders: Array<string>;
  public percentiles: Array<number>;
  public tableData: Array<Array<ICellData>>;
  public rowsMaxValues: Record<number, number>;
  public rowsSums: Record<number, number>;
  public percentileLimit: number;
  public colsNumber: number;

  constructor() {
    this.tableHeaders = [];
    this.percentiles = [];
    this.tableData = [];
    this.rowsMaxValues = {};
    this.rowsSums = {};
    this.percentileLimit = PERCENTILE_LIMIT;
    this.colsNumber = 0;
  }

  public createCell(rowIndex: number): ICellData {
    const id = idGeneratorService.next();
    const value = randomNumberService.generateDigits(3);

    if (!this.rowsMaxValues[rowIndex]) {
      this.rowsMaxValues[rowIndex] = value;
    } else if (value > this.rowsMaxValues[rowIndex]) {
      this.rowsMaxValues[rowIndex] = value;
    }

    const percent = this.calculateCellPercent(rowIndex, value);

    return { id, amount: value, percent };
  }

  public calculateCellPercent(rowIndex: number, cellValue: number) {
    const percent = Math.round(
      (cellValue / this.rowsMaxValues[rowIndex]) * 100
    );

    return percent;
  }

  public resetCellPercent(rowIndex: number, colIndex: number) {
    const cell = this.tableData[rowIndex][colIndex];

    if (!cell) {
      return;
    }

    const percent = this.calculateCellPercent(rowIndex, cell.amount);

    cell.percent = percent;
  }

  public createRow(rowIndex: number) {
    const row: ICellData[] = [];

    for (let i = 0; i < this.colsNumber; i++) {
      const cell = this.createCell(rowIndex);

      if (!this.rowsSums[rowIndex]) {
        this.rowsSums[rowIndex] = cell.amount;
      } else {
        this.rowsSums[rowIndex] += cell.amount;
      }

      row.push(cell);
    }

    return row;
  }

  public reassignRowSumsAndMaxValuesOnRowDelete(rowToDeleteIndex: number) {
    if (rowToDeleteIndex === this.tableData.length - 1) {
      return;
    }

    const lastIndex = this.tableData.length - 1;

    for (let i = rowToDeleteIndex; i < lastIndex; i++) {
      this.rowsMaxValues[i] = this.rowsMaxValues[i + 1];
      this.rowsSums[i] = this.rowsSums[i + 1];
    }

    delete this.rowsSums[lastIndex];
    delete this.rowsMaxValues[lastIndex];
  }

  public getColumnValues(colIndex: number) {
    const values: number[] = [];

    this.tableData.forEach((row) => {
      const cell = row[colIndex];

      values.push(cell.amount);
    });

    return values;
  }

  public calculateColumnPercentile(colIndex: number) {
    const columnValues = this.getColumnValues(colIndex);

    const percentile = statisticService.percentile(
      columnValues,
      this.percentileLimit
    );

    return Number(percentile.toFixed(2));
  }

  public calculatePercentilesRow() {
    if (!this.tableData[0]) {
      return [];
    }

    const percentileValues = [];

    const columnsNumber = this.tableData[0].length;

    for (let i = 0; i < columnsNumber; i++) {
      const columnPercentile = this.calculateColumnPercentile(i);

      percentileValues.push(columnPercentile);
    }

    return percentileValues;
  }

  public resetPercentilesRow() {
    this.percentiles = this.calculatePercentilesRow();
  }

  public deleteRow(rowIndex: number) {
    this.reassignRowSumsAndMaxValuesOnRowDelete(rowIndex);

    this.tableData = this.tableData.filter((_, i) => i !== rowIndex);

    this.resetPercentilesRow();
  }

  public addRow() {
    const newRowIndex = this.tableData.length;
    const newRow = this.createRow(newRowIndex);

    this.tableData.push(newRow);

    newRow.forEach((_, curCol) => this.resetCellPercent(newRowIndex, curCol));

    this.resetPercentilesRow();
  }

  public incrementCellValue(
    rowIndex: number,
    colIndex: number,
    incrementAmount: number = 1
  ) {
    const cell = this.tableData[rowIndex][colIndex];

    if (!cell) {
      return;
    }

    cell.amount += incrementAmount;

    this.resetPercentilesRow();
    this.rowsSums[rowIndex] += incrementAmount;

    if (cell.amount > this.rowsMaxValues[rowIndex]) {
      this.rowsMaxValues[rowIndex] = cell.amount;

      const currentRow = this.tableData[rowIndex];

      currentRow.forEach(
        (_, curCol) => this.resetCellPercent(rowIndex, curCol) //TODO: Make a method that accepts a cell
      );
    } else {
      this.resetCellPercent(rowIndex, colIndex);
    }
  }

  public generateTable(rows: number, cols: number) {
    this.colsNumber = cols;

    for (let i = 0; i < rows; i++) {
      const row = this.createRow(i);

      this.tableData.push(row);

      row.forEach(
        (_, curCol) => this.resetCellPercent(i, curCol) //TODO: Make a method that accepts a cell
      );
    }

    this.resetPercentilesRow();

    this.tableHeaders = [''];

    for (let i = 1; i <= cols; i++) {
      this.tableHeaders.push(`Col${i}`);
    }

    this.tableHeaders.push('Sum');
  }

  public getNearestByValue(
    targetRow: number,
    targetCol: number,
    neareastAmount: number
  ) {
    const nearestCellsIds: Record<number, boolean> = {};
    const matrix = this.tableData;

    const target = matrix[targetRow][targetCol];
    const topN: { id: number; diff: number }[] = [];

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === targetRow && j === targetCol) continue;
        const cell = matrix[i][j];
        const diff = Math.abs(cell.amount - target.amount);

        if (topN.length < neareastAmount) {
          topN.push({ id: cell.id, diff });
        } else {
          let maxIndex = 0;
          for (let k = 1; k < topN.length; k++) {
            if (topN[k].diff > topN[maxIndex].diff) maxIndex = k;
          }
          if (diff < topN[maxIndex].diff) {
            topN[maxIndex] = { id: cell.id, diff };
          }
        }
      }
    }

    for (const item of topN) {
      nearestCellsIds[item.id] = true;
    }

    return nearestCellsIds;
  }

  public converRowsToTableData() {
    const tableData = tableService.tableData.map((rowData, rowIndex) => ({
      title: `Row${rowIndex + 1}`,
      data: rowData,
      sum: tableService.rowsSums[rowIndex],
    }));

    return tableData;
  }

  public clearAllData() {
    this.tableHeaders = [];
    this.percentiles = [];
    this.tableData = [];
    this.rowsMaxValues = {};
    this.rowsSums = {};
    this.colsNumber = 0;
  }
}

export const tableService = new Table();
