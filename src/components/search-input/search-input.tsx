import {useState} from "react";
import {Form } from "react-bootstrap";

export const SearchInput=({value, setInputValue, subject}:{value:string, setInputValue:any, subject:string})=>{
    
    return (<div>
    <Form.Control
        value={value}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Search ${subject} name`}
    />
    </div>);


}