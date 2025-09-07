import { AppContext } from '@/context/AppContext';
import { tableService } from '@/services/tableService';
import { useContext, useEffect } from 'react';

function useClearTableData() {
  const {
    setCellsToHighlight,
    setPercentiles,
    setTableData,
    setTableConfig,
    setTableHeaders,
    setRowToHighlight,
  } = useContext(AppContext);

  const clearData = () => {
    tableService.clearAllData();

    if (setCellsToHighlight) {
      setCellsToHighlight({});
    }

    if (setPercentiles) {
      setPercentiles([]);
    }

    if (setTableData) {
      setTableData([]);
    }

    if (setTableConfig) {
      setTableConfig({
        dataRowsNumber: 0,
        dataColumnsNumber: 0,
        highlightCount: 0,
      });
    }

    if (setTableHeaders) {
      setTableHeaders([]);
    }

    if (setRowToHighlight) {
      setRowToHighlight(-1);
    }
  };

  useEffect(() => {
    return () => clearData();
  }, []);
}

export default useClearTableData;
