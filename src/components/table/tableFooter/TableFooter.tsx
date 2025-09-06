import React from 'react';
import FooterCell from '@/components/table/footerCell/FooterCell';

interface TableFooterProps {
  values: (string | number)[];
}

const TableFooter: React.FC<TableFooterProps> = ({ values }) => {
  return (
    <>
      {values.map((val, i) => (
        <FooterCell key={i} value={val} isFirstCol={i === 0} />
      ))}
    </>
  );
};

export default React.memo(TableFooter);
