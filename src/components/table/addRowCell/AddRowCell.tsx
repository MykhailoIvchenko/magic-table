import TableCell from '../tableCell/TableCell';
import Button from '@/components/ui/button/Button';
import styles from './addRowCell.module.css';

const AddRowCell = () => {
  return (
    <TableCell>
      <div className={styles.cell}>
        <Button>Add Row</Button>
      </div>
    </TableCell>
  );
};

export default AddRowCell;
