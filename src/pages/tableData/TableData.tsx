import Table from '@/components/table/Table';
import styles from './tableData.module.css';
import Title from '@/components/ui/title/Title';

const TableData: React.FC = () => {
  return (
    <section className={styles.container}>
      <Title>Table Data</Title>

      <div className={styles.tableContainer}>
        <Table />
      </div>
    </section>
  );
};

export default TableData;
