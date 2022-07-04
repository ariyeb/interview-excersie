import { useMemo } from "react";
import {Badge, ListGroup} from "react-bootstrap";


export const WorkerItem=({first_name, last_name}:{first_name:string, last_name:string})=>{

    const randomNumFromRange = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    
    const fibonacci = (n: number = randomNumFromRange(0, 30)): number => {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    const myFibonacci=  (n: number = randomNumFromRange(0, 30)): number => {
        
        const resultArray:number[]=[];
        
        if(n<0)
            return 0;

        if (n === 1 || n===0 ) {
            return 1;
        }
        
        for(let i=2; i<=n; i++)
        {
            resultArray.push(myFibonacci(i - 1) + myFibonacci(i - 2));
            
        }
        
        return resultArray[n-2];
       
    };



    const fibonacciValue= useMemo(()=>fibonacci(),[])


    return(

        <ListGroup.Item>
                        <span>{first_name} {last_name}</span>
                        <Badge bg="primary">{fibonacciValue}</Badge>
        </ListGroup.Item>

    );

}