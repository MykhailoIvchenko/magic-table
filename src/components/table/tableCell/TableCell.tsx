import React from 'react';
import styles from './tableCell.module.css';

interface ITableCellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  isFirstRow?: boolean;
  isFirstCol?: boolean;
  isExpanded?: boolean;
}

const TableCell: React.FC<ITableCellProps> = ({
  children,
  isFirstRow,
  isFirstCol,
  isExpanded,
  ...rest
}) => {
  const classNames = [
    styles.cell,
    isFirstRow ? styles['cell-first-row'] : '',
    isFirstCol ? styles['cell-first-col'] : '',
    isExpanded ? styles['cell-expanded'] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};

export default React.memo(TableCell);
