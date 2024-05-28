import './App.css';
import Grid from './TicTacToe_Project/components/Grid/Grid';
// import ToDoApp from './ToDo/ToDoApp';

function App() {
  return (
    <div className="App">
      {/* <ToDoApp /> */}
      <Grid numberOfCards={9} />
    </div>
  );
}

export default App;
