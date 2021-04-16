import "./App.css";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorForm from "./components/ColorForm";
import CompanyList from "./components/CompanyList";
//import { ListGroup } from "react-bootstrap";

function App() {
    return (
        <div>
            <Header name="My Friend" />
            {/* <TaskForm />
            <ColorForm /> */}
            <CompanyList />
            
        </div>
    );
}

export default App;
