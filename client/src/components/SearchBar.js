import React from 'react'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBar({setSearchValue}) {

    function handleSearchSubmit(e){
        e.preventDefault();
        
        const form = new FormData(e.target);
        const [searchValue] = form.values();
        setSearchValue(searchValue);
    }
    return (
        <Form onSubmit={handleSearchSubmit}>
        <InputGroup className="mb-3" >
            <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder= "Filter by film title or words in opening crawl"
                name="searchValue"
            />
            <InputGroup.Append>
                <Button type="submit" variant="warning">Search...</Button>
            </InputGroup.Append>
        </InputGroup>    
        </Form>
        
    )
}
