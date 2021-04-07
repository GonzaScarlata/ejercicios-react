import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
    <Header name='My Friend' />
    <TaskForm />
    
    </div>
  );
}

export default App;
