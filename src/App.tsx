import NumberInput from './components/common/numberInput/NumberInput';
import Table from './components/table/Table';
import TableCell from './components/table/tableCell/TableCell';
import TableDataRow from './components/table/tableDataRow/TableDataRow';
import TableFooter from './components/table/tableFooter/TableFooter';
import TableHeader from './components/table/tableHeader/TableHeader';
import Button from './components/ui/button/Button';
import Input from './components/ui/input/Input';
import Loader from './components/ui/loader/Loader';
import Title from './components/ui/title/Title';

function App() {
  return (
    <div style={{ width: '400px', margin: '20px auto' }}>
      <Title>Test title</Title>

      <Input label={'Test label'} error={'Test error'} />

      <Button>Test button</Button>

      <Loader />

      <NumberInput min={0} max={100} />
      <div style={{ marginBottom: '10px' }}></div>

      <TableCell> 1 </TableCell>
      <div style={{ marginBottom: '10px' }}></div>
      <TableCell isFirstRow isFirstCol>
        {' '}
        1{' '}
      </TableCell>
      <div style={{ marginBottom: '10px' }}></div>
      {/* <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        <TableHeader values={['One', 'Two', 'Three']} />
        <TableDataRow
          title={''}
          dataCells={[
            {
              id: 1,
              amount: 345,
              percent: 100,
            },
          ]}
          rowIndex={0}
          rowSum={345}
          isPercentDisplay
          handleIncrement={(rowIndex: number, colIndex: number) => {}}
        />

        <TableFooter values={[1.8, 3.4, 2.5]} />
      </div> */}

      <Table />
    </div>
  );
}

export default App;
