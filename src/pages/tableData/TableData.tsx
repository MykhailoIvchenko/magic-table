import Table from '@/components/table/Table';
import styles from './tableData.module.css';
import Title from '@/components/ui/title/Title';
import useGenerateTable from '@/hooks/useGenerateTable';
import Loader from '@/components/ui/loader/Loader';
import { useEffect } from 'react';
import { tableService } from '@/services/tableService';

const TableData: React.FC = () => {
  const { isLoading } = useGenerateTable();

  useEffect(() => {
    return () => tableService.clearAllData();
  }, []);

  return (
    <section className={styles.container}>
      <Title>Table Data</Title>

      <div className={styles.tableContainer}>
        {isLoading ? <Loader /> : <Table />}
      </div>
    </section>
  );
};

export default TableData;
