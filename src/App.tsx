import NumberInput from './components/common/numberInput/NumberInput';
import Button from './components/ui/button/Button';
import Input from './components/ui/input/Input';
import Loader from './components/ui/loader/Loader';
import Title from './components/ui/title/Title';

function App() {
  return (
    <div style={{ width: '250px', margin: '20px auto' }}>
      <Title>Test title</Title>

      <Input label={'Test label'} error={'Test error'} />

      <Button>Test button</Button>

      <Loader />

      <NumberInput min={0} max={100} />
    </div>
  );
}

export default App;
