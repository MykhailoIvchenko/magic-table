import { AppContext } from '@/context/AppContext';
import { tableService } from '@/services/tableService';
import { useContext, useEffect, useState } from 'react';

function useGenerateTable() {
  const { tableConfig, setTableHeaders, setTableData, setPercentiles } =
    useContext(AppContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateTable = (rows: number, cols: number) => {
    setIsLoading(true);
    tableService.generateTable(rows, cols);

    if (setTableHeaders) {
      setTableHeaders(tableService.tableHeaders);
    }

    if (setPercentiles) {
      setPercentiles(tableService.percentiles);
    }

    const tableData = tableService.converRowsToTableData();

    if (setTableData) {
      setTableData(tableData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (tableConfig.dataColumnsNumber) {
      generateTable(tableConfig.dataRowsNumber, tableConfig.dataColumnsNumber);
    }
  }, []);

  return { isLoading };
}

export default useGenerateTable;
