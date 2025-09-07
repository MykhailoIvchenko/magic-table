import TableCell from '../tableCell/TableCell';
import Button from '@/components/ui/button/Button';
import styles from './addRowCell.module.css';

interface IAddRowCellProps {
  onAddRow?: VoidFunction;
}

const AddRowCell: React.FC<IAddRowCellProps> = ({ onAddRow }) => {
  return (
    <TableCell>
      <div className={styles.cell}>
        <Button onClick={onAddRow}>Add Row</Button>
      </div>
    </TableCell>
  );
};

export default AddRowCell;
