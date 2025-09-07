import Table from '@/components/table/Table';
import styles from './tableData.module.css';
import Title from '@/components/ui/title/Title';
import useGenerateTable from '@/hooks/useGenerateTable';
import Loader from '@/components/ui/loader/Loader';
import { Suspense } from 'react';

const TableData: React.FC = () => {
  useGenerateTable();

  return (
    <section className={styles.container}>
      <Title>Table Data</Title>

      <div className={styles.tableContainer}>
        <Suspense fallback={<Loader />}>
          <Table />
        </Suspense>
      </div>
    </section>
  );
};

export default TableData;
