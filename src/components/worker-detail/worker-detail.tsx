import { Fragment } from "react";
import { Worker } from "../../utilities/models/worker.model";



export const WorkerDetail=({worker}:{worker:Worker | null})=>{


    if(worker)    
    return(

        <Fragment>
            <h1>{worker.first_name} {worker.last_name} </h1>
        
            <dl>
                <dt>first name:</dt><dd>{worker.first_name}</dd>
                <dt>last name:</dt><dd>{worker.last_name}</dd>
                <dt>email:</dt><dd>{worker.email}</dd>
                <dt>gender:</dt><dd>{worker.email}</dd>
                <dt>ip adress:</dt><dd>{worker.ip_address}</dd>
            </dl>

        </Fragment>

    );
  
    
    return null;




}