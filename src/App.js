import { Container } from './appStyle';
import Axios from './Axios';
import Fetch from './Fetch/';

const App = ()=> {
  return (
    <Container>
      <Fetch/>
      <Axios/>
    </Container>
  )
}

export default App;
