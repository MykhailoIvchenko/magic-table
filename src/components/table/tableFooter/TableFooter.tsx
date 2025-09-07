import React from 'react';
import FooterCell from '@/components/table/footerCell/FooterCell';
import RowTitleCell from '../rowTitleCell/RowTitleCell';

interface TableFooterProps {
  title?: string;
  values: (string | number)[];
}

const TableFooter: React.FC<TableFooterProps> = ({ title, values }) => {
  return (
    <>
      {typeof title === 'string' && <RowTitleCell text={title} />}

      {values.map((val, i) => (
        <FooterCell key={i} value={val} isFirstCol={i === 0} />
      ))}

      <div>Add</div>
    </>
  );
};

export default React.memo(TableFooter);
