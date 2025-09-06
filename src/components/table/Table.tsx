import styles from './table.module.css';
import TableDataRow from './tableDataRow/TableDataRow';
import TableFooter from './tableFooter/TableFooter';
import TableHeader from './tableHeader/TableHeader';

const headers = ['', 'Col1', 'Col2', 'Col3', 'Col4', 'Col5', 'Sum'];
const percentiles = [1.8, 3.4, 2.5, 2.2, 4.8];

function generateRows(rowCount = 5, itemsPerRow = 5) {
  const rows = [];

  for (let i = 1; i <= rowCount; i++) {
    const data = [];
    for (let j = 1; j <= itemsPerRow; j++) {
      const amount = Math.floor(Math.random() * 900) + 100;
      data.push({ id: j, amount });
    }

    const maxAmount = Math.max(...data.map((item) => item.amount));
    data.forEach((item) => {
      item.percent = Math.round((item.amount / maxAmount) * 100);
    });

    const sum = data.reduce((acc, item) => acc + item.amount, 0);

    rows.push({
      title: i.toString(),
      data,
      sum,
    });
  }

  return rows;
}

const rows = generateRows(5, 5);

const Table: React.FC = () => {
  return (
    <div className={styles.table} data-cols-number={5}>
      <TableHeader values={headers} />

      {rows.map((row, rowIndex) => (
        <TableDataRow
          key={rowIndex}
          title={row.title}
          dataCells={row.data}
          rowIndex={rowIndex}
          rowSum={row.sum}
          isPercentDisplay
          handleIncrement={(rowIndex: number, colIndex: number) => {}}
        />
      ))}

      <TableFooter title={'60th percentile'} values={[...percentiles, '']} />
    </div>
  );
};

export default Table;
