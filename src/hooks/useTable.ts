import { AppContext } from '@/context/AppContext';
import { useCallback, useContext } from 'react';

function useTable() {
  const {
    tableConfig,
    tableHeaders,
    percentiles,
    tableData,
    setTableData,
    setPercentiles,
    setCellsToHighlight,
    setRowToHighlight,
  } = useContext(AppContext);

  const incrementCellValue = useCallback(
    (rowIndex: number, colIndex: number) => {
      const updatedTableData = []; //TODO: Get it from the service
      const updatedPercentiles = [[]]; //TODO: Get it from the service

      if (setTableData) {
        setTableData(updatedTableData);
      }

      if (setPercentiles) {
        setPercentiles(updatedPercentiles);
      }
    },
    []
  );

  const handleDataCellHover = useCallback(
    (rowIndex: number, colIndex: number) => {
      const { highlightCount } = tableConfig;

      const closestCellsByValue = {}; //TODO: Get it from service

      if (setCellsToHighlight) {
        setCellsToHighlight(closestCellsByValue);
      }
    },
    []
  );

  const handleAggregateCellHover = useCallback((rowIndex: number) => {
    if (setRowToHighlight) {
      setRowToHighlight(rowIndex);
    }
  }, []);

  const handleDeleteRow = useCallback((rowIndex: number) => {
    const updatedTableData = []; //TODO: Get it from the service
    const updatedPercentiles = [[]]; //TODO: Get it from the service

    if (setTableData) {
      setTableData(updatedTableData);
    }

    if (setPercentiles) {
      setPercentiles(updatedPercentiles);
    }
  }, []);

  const handleAddRow = useCallback(() => {
    const updatedTableData = []; //TODO: Get it from the service
    const updatedPercentiles = [[]]; //TODO: Get it from the service

    if (setTableData) {
      setTableData(updatedTableData);
    }

    if (setPercentiles) {
      setPercentiles(updatedPercentiles);
    }
  }, []);

  return {
    tableHeaders,
    tableData,
    percentiles,
    incrementCellValue,
    handleDataCellHover,
    handleAggregateCellHover,
    handleDeleteRow,
    handleAddRow,
  };
}

export default useTable;
