import { useState } from "react"
import { SearchInput } from "../search-input/search-input"
import { WorkerList } from "../worker-list/worker-list";


export const WorkerTable=({title,classString, placeholder, list}:{
    title:string, classString:string, placeholder:string ,list:{first_name:string, last_name:string}[]})=>{

    const [InputValue,setInputValue]=useState('')
    
    return(
    <div className={classString}>
        <h2>{title}</h2>
    
    <SearchInput value={InputValue} setInputValue={setInputValue} subject={placeholder}></SearchInput>
    <WorkerList filter={InputValue}  personList={list}></WorkerList>
    </div>);


}