import { createContext, Fragment, useReducer, useState } from "react";
import { WorkerModalState } from "../../utilities/models/WorkerModalState.model";
import { WorkerModal } from "../worker-modal/worker-modal";
import { WorkerTable } from "../worker-table/table";
import { Worker } from "../../utilities/models/worker.model";
import { WorkersDispatchContext } from "../../contextProviders/worker-array-data-context/worker-array-data-context";

export const WorkerDashBoard = (props: any) => {

    const { employees, management } = props.data

    const modalInitalState: WorkerModalState = {

        visibility: false,
        worker: null,
        writable: false


    }

    const workerModalReducer = (modalState: WorkerModalState, action: { type: string, payload: any }) => {

        const { type, payload } = action;

        switch (type) {

            case "SHOW":
                return { visibility: true, worker: payload, writable: false }
            case "EDIT":
                return { visibility: true, worker: payload, writable: true }
            case "ADD":
                return { visibility: true, worker: null, writable: true }
            default:
                return modalInitalState

        }

    }

    const [modalState, dispatchModal] = useReducer(workerModalReducer, modalInitalState)


    const workersDataReducer = (workersDataState: { [index: string]: Worker[] }, action: { type: string, payload: any }) => {

        const { type, payload } = action;

        switch (type) {

            case "ADD": {

                const newWorkerArray = [...workersDataState[payload.type]]
                newWorkerArray.push(payload.worker);

                return {
                    ...workersDataState,
                    [payload.type]: newWorkerArray
                };
            }
            case "REMOVE": {

                const newWorkerArray = [...workersDataState[payload.type]].filter((worker) => {

                    return worker.id !== payload.worker.id

                })

                return {
                    ...workersDataState,
                    [payload.type]: newWorkerArray
                }


            }
            case "PATCH": {

                
                const newWorkerArray = [...workersDataState[payload.type]].map((worker) => {

                    if ( worker.id === payload.worker.id) {
                        
                        return payload.worker

                    }
                    else
                        return worker;

                })


                return { ...workersDataState, [payload.type]: newWorkerArray }



            }
            case "SWITCH": {

                const newCurrentWorkerArray = [...workersDataState[payload.type]].filter((worker) => {

                    return worker.id !== payload.worker.id
                })

                if (payload.typeTo == null)
                    return workersDataState;

                const newToWorkerArray = [...workersDataState[payload.typeTo]]

                newToWorkerArray.push(payload.worker);


                return {
                    ...workersDataState,
                    [payload.type]: newCurrentWorkerArray,
                    [payload.typeTo]: newToWorkerArray
                }

            }
            default: {

                return workersDataState;

            }

        }


    }
    const [workersDataState,dispatchWorkersData]=useReducer(workersDataReducer,{employees, management})

   

    

    return (
        <Fragment>
            <WorkersDispatchContext.Provider value={dispatchWorkersData}>
            <WorkerTable title="Employees: " placeholder="employee" cssClass='employees' list={workersDataState["employees"]} dispatchModal={dispatchModal}></WorkerTable>
            <WorkerTable title="Management: " placeholder="manager" cssClass="management" list={workersDataState["management"]} dispatchModal={dispatchModal}></WorkerTable>
            <WorkerModal modalState={modalState} setModal={dispatchModal} ></WorkerModal>
            </WorkersDispatchContext.Provider>
        </Fragment>
    )

}

