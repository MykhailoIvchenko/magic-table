import TableCell from '@/components/table/tableCell/TableCell';
import TrashIcon from '@/assets/img/icons/trash-icon.svg?react';
import Button from '@/components/ui/button/Button';
import styles from './rowTitleCell.module.css';

interface IRowTitleCellProps {
  text: string;
  rowIndex: number;
  onDeleteRow?: (rowIndex: number) => void;
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
