import { AppContext } from '@/context/AppContext';
import { tableService } from '@/services/tableService';
import { useCallback, useContext } from 'react';

function useTable() {
  const {
    cellsToHighlight,
    rowToHighlight,
    tableConfig,
    tableHeaders,
    percentiles,
    tableData,
    setTableData,
    setPercentiles,
    setCellsToHighlight,
    setRowToHighlight,
  } = useContext(AppContext);

  const updateData = () => {
    if (setTableData) {
      const tableData = tableService.converRowsToTableData();

      setTableData(tableData);
    }

    if (setPercentiles) {
      setPercentiles(tableService.percentiles);
    }
  };

  const incrementCellValue = useCallback(
    (rowIndex: number, colIndex: number) => {
      tableService.incrementCellValue(rowIndex, colIndex);

      updateData();
    },
    []
  );

  const handleDataCellHover = useCallback(
    (rowIndex: number, colIndex: number) => {
      const { highlightCount } = tableConfig;

      const closestCellsByValue = tableService.getNearestByValue(
        rowIndex,
        colIndex,
        highlightCount
      );

      if (setCellsToHighlight) {
        setCellsToHighlight(closestCellsByValue);
      }
    },
    []
  );

  const handleDataCellLeave = useCallback(() => {
    if (setCellsToHighlight) {
      setCellsToHighlight({});
    }
  }, []);

  const handleAggregateCellHover = useCallback((rowIndex: number) => {
    if (setRowToHighlight) {
      setRowToHighlight(rowIndex);
    }
  }, []);

  const handleDeleteRow = useCallback((rowIndex: number) => {
    tableService.deleteRow(rowIndex);

    updateData();
  }, []);

  const handleAddRow = useCallback(() => {
    tableService.addRow();

    updateData();
  }, []);

  return {
    cellsToHighlight,
    tableConfig,
    tableHeaders,
    tableData,
    percentiles,
    rowToHighlight,
    incrementCellValue,
    handleDataCellHover,
    handleAggregateCellHover,
    handleDeleteRow,
    handleAddRow,
    handleDataCellLeave,
  };
}

export default useTable;
