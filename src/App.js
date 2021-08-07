import ToDo from './Components/ToDo';



function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <ToDo text='things' />
      <ToDo text='other things' />
      <ToDo text='text' />
    </div>
  );
}

export default App;
