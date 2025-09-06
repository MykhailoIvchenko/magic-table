interface ICellData {
  id: number;
  amount: number;
  percent: number;
}

type TableData = Array<Array<ICellData>>;
