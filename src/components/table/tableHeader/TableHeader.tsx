import React from 'react';
import HeaderCell from '@/components/table/headerCell/HeaderCell';
interface TableHeaderProps {
  values: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ values }) => {
  return (
    <>
      {values.map((val, i) => (
        <HeaderCell key={i} text={val} isFirstCol={i === 0} />
      ))}
    </>
  );
};

export default React.memo(TableHeader);
