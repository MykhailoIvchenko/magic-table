import Button from './components/ui/button/Button';
import Input from './components/ui/input/Input';

function App() {
  return (
    <div style={{ width: '200px', margin: '20px auto' }}>
      <Input label={'Test label'} error={'Test error'} />

      <Button>Test button</Button>
    </div>
  );
}

export default App;
