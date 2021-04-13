import './App.css';
import Title from "./components/Title";

function App(props) {
  return (
    <div className="App">
      <Title title={props.title} />
    </div>
  );
}

export default App;
