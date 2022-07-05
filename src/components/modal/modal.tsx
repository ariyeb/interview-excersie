
import "./modal.css";





export const Modal=(props:any)=>{

    if(props.isShown)
        return(
        <div className="my-modal">
            
            <div className="my-modal__body">
                <button className="my-modal__button" onClick={()=>props.setModal({type:"REMOVE", payload:null})} >X</button> 
                    <div className="my-modal__container">
                    {props.children}
                    </div>
            </div>

        </div>
        );
    else
    return null;










}
