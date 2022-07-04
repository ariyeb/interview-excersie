import { useReducer, useState } from "react"
import { SearchInput } from "../search-input/search-input"
import { WorkerList } from "../worker-list/worker-list";


export const WorkerTable=({title,cssClass, placeholder, list}:{
    title:string, cssClass:string, placeholder:string ,list:{first_name:string, last_name:string}[]})=>{

    const [searchInput,setSearch]=useState('')
    
   




    return(
    <div className={cssClass}>
        <h2>{title}</h2>
    
    <SearchInput setSearch={setSearch} subject={placeholder}></SearchInput>
    <WorkerList searchInput={searchInput}  workersList={list}></WorkerList>
    </div>);


}