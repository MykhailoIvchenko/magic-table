import { createContext } from 'react';

export interface IContext {
  tableConfig: ITableConfig;
  setTableConfig?: React.Dispatch<React.SetStateAction<ITableConfig>>;

  tableHeaders: string[];
  setTableHeaders?: React.Dispatch<React.SetStateAction<string[]>>;

  percentiles: string[];
  setPercentiles?: React.Dispatch<React.SetStateAction<string[]>>;

  tableData: TableData;
  setTableData?: React.Dispatch<React.SetStateAction<TableData>>;

  rowToHighlight: number;
  setRowToHighlight?: React.Dispatch<React.SetStateAction<number>>;

  cellsToHighlight: Record<string, boolean>;
  setCellsToHighlight?: React.Dispatch<
    React.SetStateAction<Record<string, boolean>>
  >;
}

export const defaultContext: IContext = {
  tableConfig: { dataColumnsNumber: 0, dataRowsNumber: 0, highlightCount: 0 },
  tableHeaders: [],
  percentiles: [],
  tableData: [],
  rowToHighlight: -1,
  cellsToHighlight: {},
};

export const AppContext = createContext<IContext>(defaultContext);
