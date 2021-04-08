import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import "bootstrap/dist/css/bootstrap.min.css";
import ColorForm from './components/ColorForm';


function App() {
  return (
    <div>
    <Header name='My Friend' />
    <TaskForm />
    <ColorForm />
    
    </div>
  );
}

export default App;
