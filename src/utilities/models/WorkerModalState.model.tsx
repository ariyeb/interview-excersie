import { Worker } from "./worker.model";



export interface WorkerModalState{

    visibility:boolean,
    worker:Worker | null,
    writable:boolean

}