import React from 'react';
import FooterCell from '@/components/table/footerCell/FooterCell';
import RowTitleCell from '../rowTitleCell/RowTitleCell';
import AddRowCell from '../addRowCell/AddRowCell';

interface TableFooterProps {
  title?: string;
  values: (string | number)[];
  onAddRow?: VoidFunction;
}

const TableFooter: React.FC<TableFooterProps> = ({
  title,
  values,
  onAddRow,
}) => {
  return (
    <>
      {typeof title === 'string' && <RowTitleCell text={title} />}

      {values.map((val, i) => (
        <FooterCell
          key={i}
          value={val}
          isFirstCol={typeof title !== 'string' && i === 0}
        />
      ))}

      <AddRowCell onAddRow={onAddRow} />
    </>
  );
};

export default React.memo(TableFooter);
