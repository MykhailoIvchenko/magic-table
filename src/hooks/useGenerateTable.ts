import { AppContext } from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';

function useGenerateTable() {
  const { tableConfig, setTableHeaders, setTableData, setPercentiles } =
    useContext(AppContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateTable = (rows: number, cols: number) => {
    const headers = []; //TODO: Get from the service
    const percentiles = []; //TODO: Get from the service
    const tableRowsData = [[]]; //TODO: Get from the service

    setIsLoading(true);

    if (setTableHeaders) {
      setTableHeaders(headers);
    }

    if (setPercentiles) {
      setPercentiles(percentiles);
    }

    if (setTableData) {
      setTableData(tableRowsData);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    generateTable(tableConfig.dataRowsNumber, tableConfig.dataColumnsNumber);
  }, []);
}

export default useGenerateTable;
