import TableCell from '@/components/table/tableCell/TableCell';
import TrashIcon from '@/assets/img/icons/trash-icon.svg?react';
import styles from './rowTitleCell.module.css';
import Button from '@/components/ui/button/Button';

interface IRowTitleCellProps {
  text: string;
  onDeleteRow?: (rowIndex: number) => void;
  rowIndex: number;
}

const RowTitleCell: React.FC<IRowTitleCellProps> = ({
  text,
  rowIndex,
  onDeleteRow,
}) => {
  return (
    <TableCell isFirstCol>
      <div className={styles.rowTitleCell}>
        <strong className={styles.rowTitleCellText}>{text}</strong>
        {onDeleteRow && (
          <Button
            className={styles.deleteButton}
            onClick={() => onDeleteRow(rowIndex)}
            title={'Delete Row'}
          >
            <TrashIcon />
          </Button>
        )}
      </div>
    </TableCell>
  );
};

export default RowTitleCell;
