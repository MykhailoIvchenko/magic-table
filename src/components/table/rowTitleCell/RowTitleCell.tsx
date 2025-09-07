import TableCell from '@/components/table/tableCell/TableCell';
import styles from './rowTitleCell.module.css';

interface IRowTitleCellProps {
  text: string;
}

const RowTitleCell: React.FC<IRowTitleCellProps> = ({ text }) => {
  return (
    <TableCell isFirstCol>
      <strong className={styles.rowTitleCell}>{text}</strong>
    </TableCell>
  );
};

export default RowTitleCell;
