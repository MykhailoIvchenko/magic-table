import React, { useState } from 'react';
import { AppContext, type IContext } from './AppContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [dataRowsNumber, setDataRowsNumber] = useState(0);
  const [dataColumnsNumber, setDataColumnsNumber] = useState(0);
  const [highlightCount, setHighlightCount] = useState(0);
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [percentiles, setPercentiles] = useState<string[]>([]);
  const [tableData, setTableData] = useState<TableData>([]);
  const [rowToHighlight, setRowToHighlight] = useState(-1);
  const [cellsToHighlight, setCellsToHighlight] = useState<number[]>([]);

  const contextValue: IContext = {
    dataRowsNumber,
    setDataRowsNumber,
    dataColumnsNumber,
    setDataColumnsNumber,
    highlightCount,
    setHighlightCount,
    tableHeaders,
    setTableHeaders,
    percentiles,
    setPercentiles,
    tableData,
    setTableData,
    rowToHighlight,
    setRowToHighlight,
    cellsToHighlight,
    setCellsToHighlight,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
