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

interface ITableDataRow {
  title: string;
  data: ICellData[];
  sum: number;
}

type TableData = Array<ITableDataRow>;
