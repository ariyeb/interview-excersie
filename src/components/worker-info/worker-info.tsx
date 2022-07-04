import { Modal } from "../modal/modal"


export const WorkerInfo=(props:any)=>{

    const {worker}=props;
    


    return(
    <Modal isShown={props.isShown} setModal={props.setModal}>

       
        <h1>{worker.first_name} {worker.last_name} </h1>
        <h2>badges: {worker.badge}</h2>

        <dl>
        <dt>first name:</dt><dd contentEditable={true} onInput={()=>console.log("hello")}>{worker.first_name}</dd>
        <dt>last name:</dt><dd contentEditable={true} onInput={()=>console.log("hello")}>{worker.last_name}</dd>
        <dt>email:</dt><dd contentEditable={true } onBlur={()=>console.log("hello")}>{worker.email}</dd>
        <dt>gender:</dt><dd contentEditable={true} onInput={()=>console.log("hello")}>{worker.email}</dd>
        <dt>ip adress:</dt><dd contentEditable={true} onInput={()=>console.log("hello")}>{worker.ip_address}</dd>
        </dl>


    </Modal>);


}