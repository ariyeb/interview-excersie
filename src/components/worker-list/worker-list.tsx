
import { ListGroup } from "react-bootstrap"
import { WorkerItem } from "../worker-item/worker-item"


export const WorkerList=({filter,personList}:{filter:string ,personList:{first_name:string, last_name:string}[]})=>{

    const filteredPersonList = personList.filter(person => {
        const name = person.first_name + ' ' + person.last_name;
        return name.toLowerCase().includes(filter.toLowerCase());
    });   


return(
    <ListGroup>
        {
            filteredPersonList.map(worker =>
                (
                   <WorkerItem first_name={worker.first_name} last_name={worker.last_name}></WorkerItem>
                ))
        }
    </ListGroup>);



}