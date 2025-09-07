import Table from '@/components/table/Table';
import styles from './tableData.module.css';
import Title from '@/components/ui/title/Title';
import useGenerateTable from '@/hooks/useGenerateTable';
import Loader from '@/components/ui/loader/Loader';
import usePageLeaveConfirmation from '@/hooks/usePageLeaveConfirmtaion';

const TableData: React.FC = () => {
  const { isLoading } = useGenerateTable();

  usePageLeaveConfirmation();

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
