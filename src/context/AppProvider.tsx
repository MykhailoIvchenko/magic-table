import React, { useState } from 'react';
import { AppContext, type IContext } from './AppContext';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [tableConfig, setTableConfig] = useState({
    dataColumnsNumber: 0,
    dataRowsNumber: 0,
    highlightCount: 0,
  });
  const [tableHeaders, setTableHeaders] = useState<string[]>([]);
  const [percentiles, setPercentiles] = useState<number[]>([]);
  const [tableData, setTableData] = useState<TableData>([]);
  const [rowToHighlight, setRowToHighlight] = useState(-1);
  const [cellsToHighlight, setCellsToHighlight] = useState<
    Record<string, boolean>
  >({});

  const contextValue: IContext = {
    tableConfig,
    setTableConfig,
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
