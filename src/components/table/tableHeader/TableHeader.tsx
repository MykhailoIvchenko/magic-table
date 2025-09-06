import React from 'react';
import HeaderCell from '@/components/table/headerCell/HeaderCell';
interface TableHeaderProps {
  columns: string[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <>
      {columns.map((col, i) => (
        <HeaderCell key={i} text={col} isFirstCol={i === 0} />
      ))}
    </>
  );
};

export default React.memo(TableHeader);
