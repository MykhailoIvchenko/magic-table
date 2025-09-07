import { useEffect } from 'react';
import styles from './table.module.css';
import TableDataRow from './tableDataRow/TableDataRow';
import TableFooter from './tableFooter/TableFooter';
import TableHeader from './tableHeader/TableHeader';
import useTable from '@/hooks/useTable';

const Table: React.FC = () => {
  const {
    rowToHighlight,
    tableConfig,
    tableData,
    tableHeaders,
    percentiles,
    handleAggregateCellHover,
    handleDataCellHover,
    handleDataCellLeave,
    handleAddRow,
    handleDeleteRow,
    incrementCellValue,
    cellsToHighlight,
  } = useTable();

  useEffect(() => {
    if (tableConfig?.dataColumnsNumber != null) {
      document.documentElement.style.setProperty(
        '--table-columns-number',
        String(tableConfig.dataColumnsNumber + 2)
      );
    }
  }, [tableConfig?.dataColumnsNumber]);

  return (
    <div className={styles.table}>
      <TableHeader values={tableHeaders} />

      {tableData.map((row, rowIndex) => (
        <TableDataRow
          key={rowIndex}
          title={row.title}
          dataCells={row.data}
          rowIndex={rowIndex}
          rowSum={row.sum}
          isPercentDisplay={rowToHighlight === rowIndex}
          handleIncrement={incrementCellValue}
          handleCellHover={handleDataCellHover}
          handleCellLeave={handleDataCellLeave}
          cellsToHighlight={cellsToHighlight}
          onHoverRow={handleAggregateCellHover}
          onDeleteRow={handleDeleteRow}
        />
      ))}

      <TableFooter
        title={'60th percentile'}
        values={percentiles}
        onAddRow={handleAddRow}
      />
    </div>
  );
};

export default Table;
