import { useMemo } from "react";
import {Badge, ListGroup} from "react-bootstrap";



export const WorkerItem=({first_name, last_name, badgeValue}:{first_name:string, last_name:string ,badgeValue:number})=>{

    
    return(

        <ListGroup.Item>
            <span>{first_name} {last_name}</span>
            <Badge bg="primary">{badgeValue}</Badge>
        </ListGroup.Item>
        
    );

}