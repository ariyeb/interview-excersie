import { useReducer, useState } from "react"
import { SearchInput } from "../search-input/search-input"
import { WorkerList } from "../worker-list/worker-list";
import { Worker } from "../../utilities/models/worker.model";
import { Button } from "react-bootstrap";

export const WorkerTable=({title,cssClass, placeholder, list, dispatchModal}:{
    title:string, cssClass:string, placeholder:string ,list:Worker[], dispatchModal:any})=>{

    const [searchInput,setSearch]=useState('')
   




    return(
    <div className={cssClass}>
        <h2>{title}</h2>
        <Button onClick={()=>dispatchModal({type:"ADD", payload:null})}>+</Button>
    <SearchInput setSearch={setSearch} subject={placeholder}></SearchInput>
    <WorkerList searchInput={searchInput}  workersList={list} dispatchModal={dispatchModal}></WorkerList>
    </div>);


}