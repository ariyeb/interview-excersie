import { Modal } from "../modal/modal"
import { WorkerDetail } from "../worker-detail/worker-detail";
import { WorkerModalState } from "../../utilities/models/WorkerModalState.model";
import { WorkerForm } from "../worker-form/worker-form";

export const WorkerModal=({modalState,setModal}:{modalState:WorkerModalState, setModal:any})=>{

  if(!modalState.visibility)
    return null
  
  if(!modalState.writable)
    return(
      <Modal isShown={modalState.visibility} setModal={setModal}>
                
      <WorkerDetail worker={modalState.worker}></WorkerDetail>
    </Modal>);


  return (

    <Modal isShown={modalState.visibility} setModal={setModal}>
                
        <WorkerForm worker={modalState.worker}></WorkerForm>
    </Modal>);


}