
import { useContext } from "react";
import { Worker } from "../../utilities/models/worker.model";
import "./worker-form.css";
import { WorkersDispatchContext } from "../../contextProviders/worker-array-data-context/worker-array-data-context";


 /*  <dl>
        <dt>first name:</dt><dd>{worker.first_name}</dd>
        <dt>last name:</dt><dd>{worker.last_name}</dd>
        <dt>email:</dt><dd>{worker.email}</dd>
        <dt>gender:</dt><dd>{worker.email}</dd>
        <dt>ip adress:</dt><dd>{worker.ip_address}</dd>
    </dl> */

export const WorkerForm=({worker}:{worker:Worker | null})=>{
    
    const WorkersDataDispatch=useContext(WorkersDispatchContext)


    return(
    <form className="WorkerForm" action="">

        <label className="WorkerForm__label">
           first name: <input className="WorkerForm__input" type="text" value={worker?.first_name || ""}/>
        </label>
        <label className="WorkerForm__label">
            last name: <input type="text" className="WorkerForm__input"  value={worker?.last_name || ""} />
        </label>
        <label className="WorkerForm__label">
            email: <input type="text" className="WorkerForm__input"  value={worker?.email || ""}  />
        </label>
        <label className="WorkerForm__label">
            gender: <input type="text" className="WorkerForm__input"  value={worker?.gender || ""}  />
        </label>
        <label className="WorkerForm__label">
            ip adress: <input type="text" className="WorkerForm__input"  value={worker?.ip_address || ""}  />
        </label>
    </form>
    )
    
    ;




}