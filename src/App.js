import Container from './components/Container/Container';
import Button from './components/Button/Button';
import Stopwatch from './components/Stopwatch/Stopwatch';

const App = () => {
  return (
    <Container>
      <Stopwatch/>
      <Button>START</Button>
      <Button>STOP</Button>
      <Button>RESET</Button>
    </Container>
  );
};

export default App;
