
import { useEffect, useMemo, useState } from "react";
import { Badge, ListGroup } from "react-bootstrap"
import { improvedFibonnaci, randomNumFromRange } from "../../utilities/helper-funcions/fibonacci";
import { WorkerItem } from "../worker-item/worker-item"
import { Worker } from "../../utilities/models/worker.model";



export const WorkerList=({searchInput,workersList, dispatchModal}:{searchInput:string ,workersList:Worker[],dispatchModal:any})=>{

  
    const addBadge=(workersList: any[])=>{

       return workersList.map((worker)=>{
        worker["badge"]=improvedFibonnaci()
        return worker;
    })

    }
    
    const memoWorkersList=useMemo(()=>addBadge(workersList),[workersList]);
    
  
   
    const [workersToDisplayList,setWorkersDisplaylist]=useState(memoWorkersList);

    
    useEffect(()=>{
        
        setWorkersDisplaylist(memoWorkersList.filter(worker => {
            const name = worker.first_name + ' ' + worker.last_name;
            return name.toLowerCase().includes(searchInput.toLowerCase());
        }))


    },[searchInput])

    
    
    return(
        <ListGroup>
            {
                workersToDisplayList.map(worker =>
                    (
                        <WorkerItem key={worker.id} 
                        worker={worker}
                        badgeValue={worker.badge}
                        dispatchModal={dispatchModal} 
                        ></WorkerItem>
                    ))
            }
        </ListGroup>);



}