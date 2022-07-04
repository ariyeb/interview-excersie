import {Form } from "react-bootstrap";

export const SearchInput=({ setSearch, subject}:{ setSearch:any, subject:string})=>{
    
    return (<div>
    <Form.Control
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search ${subject} name`}
    />
    </div>);


}