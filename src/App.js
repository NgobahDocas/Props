import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman"> </Greet>
      <Greet name="Clark" heroName="Superman "></Greet>
      <Greet name="Diana" heroName="Wonder Woman"></Greet>
      <Welcome  name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman "/>
      <Welcome  name="Diana" heroName="Wonder Woman"/>
    </div>
  );
}

export default App;
