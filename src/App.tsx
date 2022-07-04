import './App.css'
import {Badge, Form, ListGroup, Table} from "react-bootstrap";
import {useReducer, useState} from "react";
import employees from './EMPLOYEES.json'
import management from './MANAGEMENT.json'
import { WorkerTable } from './components/worker-table/table';
import { WorkerInfo } from "./components/worker-info/worker-info";

const randomNumFromRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const fibonacci = (n: number = randomNumFromRange(0, 30)): number => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

function App() {

    const [modalVisibility,setModal]=useState(true)
    const [worker,setWorker]=useState(employees[1]);
    
   
    


    return (
        <div className="App">
            
            <WorkerTable title="Employees: " placeholder="employee" cssClass='employees' list={employees}></WorkerTable>
            <WorkerTable title="Management: " placeholder="manager" cssClass="management" list={management}></WorkerTable>        
            <WorkerInfo worker={worker} isShown={modalVisibility} setModal={setModal} ></WorkerInfo>
        
        </div>
    )
}

export default App
