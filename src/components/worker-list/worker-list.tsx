
import { useDebugValue, useEffect, useLayoutEffect, useMemo } from "react";
import { Badge, ListGroup } from "react-bootstrap"
import { improvedFibonnaci } from "../../utilities/helper-funcions/fibonacci";
import { WorkerItem } from "../worker-item/worker-item"


export const WorkerList=({searchInput,workersList}:{searchInput:string ,workersList:{first_name:string, last_name:string}[]})=>{

  
    const addBadge=(workersList: any[])=>{

       return workersList.map((worker)=>{
        worker["badge"]=improvedFibonnaci()
        return worker;
    })

    }
    
    const memoWorkersList=useMemo(()=>addBadge(workersList),[]);
    
    const filteredworkerList=memoWorkersList.filter(worker => {
        const name = worker.first_name + ' ' + worker.last_name;
        return name.toLowerCase().includes(searchInput.toLowerCase());
    })
    
    
    return(
        <ListGroup>
            {
                filteredworkerList.map(worker =>
                    (
                    
                    <WorkerItem key={worker.id} first_name={worker.first_name} last_name={worker.last_name} badgeValue={worker.badge}></WorkerItem>
                    ))
            }
        </ListGroup>);



}