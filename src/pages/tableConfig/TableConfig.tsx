import React, { useContext, useState } from 'react';
import NumberInput from '@/components/common/numberInput/NumberInput';
import Button from '@/components/ui/button/Button';
import { useNavigate } from 'react-router';
import Title from '@/components/ui/title/Title';
import { AppContext } from '@/context/AppContext';
import { routerConfig } from '@/routes/config';
import styles from './tableConfig.module.css';

const TableConfig: React.FC = () => {
  const [rowsNumber, setRowsNumber] = useState<number>(0);
  const [colsNumber, setColsNumber] = useState<number>(0);
  const [highlightCount, setHighlightCount] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const navigate = useNavigate();

  const highlightCountMaxValue = colsNumber - 1;

  const { setTableConfig } = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rowsNumber < 1) {
      setError('The table should contain at least one row');
      return;
    }

    if (colsNumber < 1) {
      setError('The table should contain at least one column');
      return;
    }

    if (highlightCount < 1) {
      setError('Cells to highlight number should be a positive number');
      return;
    }

    if (setTableConfig) {
      setTableConfig({
        dataRowsNumber: rowsNumber,
        dataColumnsNumber: colsNumber,
        highlightCount,
      });
    }

    navigate(routerConfig.table.path);
  };

  const handleChangeColsNumber = (newValue: number) => {
    setColsNumber(newValue);

    if (newValue < colsNumber && highlightCount > newValue - 1) {
      setHighlightCount(newValue - 1);
    }
  };

  return (
    <section className={styles.wrapper}>
      <Title>Please, config the table</Title>

      <form onSubmit={handleSubmit} className={styles.form}>
        <NumberInput
          label='Rows'
          value={rowsNumber}
          min={1}
          max={100}
          onChange={setRowsNumber}
          isRow
          inputClassName={styles.numInput}
        />

        <NumberInput
          label='Columns'
          value={colsNumber}
          min={1}
          max={100}
          onChange={handleChangeColsNumber}
          isRow
          inputClassName={styles.numInput}
        />

        <NumberInput
          label='Highlight count'
          value={highlightCount}
          min={1}
          max={highlightCountMaxValue}
          onChange={setHighlightCount}
          isRow
          inputClassName={styles.numInput}
        />

        {error && <p className={styles.formError}>{error}</p>}

        <Button
          type='submit'
          disabled={rowsNumber < 1 || colsNumber < 1 || highlightCount < 1}
        >
          Generate Table
        </Button>
      </form>
    </section>
  );
};

export default TableConfig;
