interface ICellData {
  id: number;
  amount: number;
  percent: number;
}

interface ITableConfig {
  dataRowsNumber: number;
  dataColumnsNumber: number;
  highlightCount: number;
}

type TableData = Array<Array<ICellData>>;
