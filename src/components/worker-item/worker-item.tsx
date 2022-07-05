import { Fragment, useContext, useMemo } from "react";
import { Badge, Button, ButtonGroup, ListGroup } from "react-bootstrap";
import { WorkersDispatchContext } from "../../contextProviders/worker-array-data-context/worker-array-data-context";
import { Worker } from "../../utilities/models/worker.model";

export const WorkerItem = ({ worker, badgeValue,dispatchModal }: { worker: Worker, badgeValue: number , dispatchModal:any}) => {

    const workerArrayDispatch=useContext(WorkersDispatchContext)


    return (
        <Fragment>
            <ListGroup.Item>
                <span>{worker.first_name} {worker.last_name}</span>
                <Badge bg="primary">{badgeValue}</Badge>
            </ListGroup.Item>
            <ButtonGroup>
                <Button onClick={()=>dispatchModal({type:"SHOW",payload:worker})}>show</Button>
                <Button onClick={()=>dispatchModal({type:"EDIT",payload:worker})}> Edit</Button>
                <Button onClick={()=>workerArrayDispatch({type:"REMOVE",payload:{type:"employee", worker}})}>Delete</Button>
            </ButtonGroup>
        </Fragment>
    );

}