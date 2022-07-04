import './App.css'
import {Badge, Form, ListGroup, Table} from "react-bootstrap";
import {useState} from "react";
import employees from './EMPLOYEES.json'
import management from './MANAGEMENT.json'
import { WorkerTable } from './components/table/table';

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

    return (
        <div className="App">
           
            <WorkerTable title="Employees: " placeholder="employee" classString='employees' list={employees}></WorkerTable>
            <WorkerTable title="Management: " placeholder="manager" classString="management" list={management}></WorkerTable>        

        
        </div>
    )
}

export default App
