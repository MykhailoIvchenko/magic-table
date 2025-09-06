import Button from './components/ui/button/Button';
import Input from './components/ui/input/Input';
import Title from './components/ui/title/Title';

function App() {
  return (
    <div style={{ width: '200px', margin: '20px auto' }}>
      <Title>Test title</Title>

      <Input label={'Test label'} error={'Test error'} />

      <Button>Test button</Button>
    </div>
  );
}

export default App;
