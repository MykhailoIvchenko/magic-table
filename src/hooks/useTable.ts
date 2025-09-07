import { AppContext } from '@/context/AppContext';
import { tableService } from '@/services/tableService';
import { useCallback, useContext } from 'react';

function useTable() {
  const {
    cellsToHighlight,
    rowToHighlight,
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

      const closestCellsByValue = tableService.getNearestByValue(
        rowIndex,
        colIndex,
        highlightCount
      );

      if (setCellsToHighlight) {
        setCellsToHighlight(closestCellsByValue);
      }
    },
    []
  );

  const handleDataCellLeave = useCallback(() => {
    if (setCellsToHighlight) {
      setCellsToHighlight({});
    }
  }, []);

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
    cellsToHighlight,
    tableConfig,
    tableHeaders,
    tableData,
    percentiles,
    rowToHighlight,
    incrementCellValue,
    handleDataCellHover,
    handleAggregateCellHover,
    handleDeleteRow,
    handleAddRow,
    handleDataCellLeave,
  };
}

export default useTable;
