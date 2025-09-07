import Table from '@/components/table/Table';
import Title from '@/components/ui/title/Title';
import useGenerateTable from '@/hooks/useGenerateTable';
import Loader from '@/components/ui/loader/Loader';
import usePageLeaveConfirmation from '@/hooks/usePageLeaveConfirmtaion';
import useClearTableData from '@/hooks/useClearTableData';
import styles from './tableData.module.css';

const TableData: React.FC = () => {
  const { isLoading } = useGenerateTable();

  usePageLeaveConfirmation();
  useClearTableData();

  return (
    <section className={styles.container}>
      <Title>Table Data</Title>

      <div className={styles.tableContainer}>
        {isLoading ? <Loader rows={8} columns={8} /> : <Table />}
      </div>
    </section>
  );
};

export default TableData;
