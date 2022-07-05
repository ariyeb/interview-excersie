import './App.css'
import employees from './EMPLOYEES.json'
import management from './MANAGEMENT.json'
import { WorkerDashBoard } from './components/worker-dash-board/worker-dash-board';


function App() {

   
    



    return (
        <div className="App">

            <WorkerDashBoard data={{employees, management}}></WorkerDashBoard>

        </div>
    )
}

export default App
