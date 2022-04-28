import './App.css';
import AddContent from './components/AddContent'
import ListTodo from './components/ListTodo'
import Stat from './components/Stat'

function App() {
  return (
    <div className="container">
      <header>
        <h1>T O D O</h1>
      </header>
      <main>
        <AddContent />
        <ListTodo />
        <Stat />
      </main>
      <footer className="hidden">
        <p>Double-Click to edit a todo</p>
      </footer>
    </div>
  );
}

export default App;
