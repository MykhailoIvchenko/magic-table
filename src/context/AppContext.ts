import { createContext } from 'react';

export interface IContext {
  dataRowsNumber: number;
  setDataRowsNumber?: React.Dispatch<React.SetStateAction<number>>;

  dataColumnsNumber: number;
  setDataColumnsNumber?: React.Dispatch<React.SetStateAction<number>>;

  highlightCount: number;
  setHighlightCount?: React.Dispatch<React.SetStateAction<number>>;

  tableHeaders: string[];
  setTableHeaders?: React.Dispatch<React.SetStateAction<string[]>>;

  percentiles: string[];
  setPercentiles?: React.Dispatch<React.SetStateAction<string[]>>;

  tableData: TableData;
  setTableData?: React.Dispatch<React.SetStateAction<TableData>>;

  rowToHighlight: number;
  setRowToHighlight?: React.Dispatch<React.SetStateAction<number>>;

  cellsToHighlight: number[];
  setCellsToHighlight?: React.Dispatch<React.SetStateAction<number[]>>;
}

export const defaultContext: IContext = {
  dataRowsNumber: 0,
  dataColumnsNumber: 0,
  highlightCount: 0,
  tableHeaders: [],
  percentiles: [],
  tableData: [],
  rowToHighlight: -1,
  cellsToHighlight: [],
};

export const AppContext = createContext<IContext>(defaultContext);
