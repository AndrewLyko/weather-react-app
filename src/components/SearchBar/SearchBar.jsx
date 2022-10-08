import React from 'react';
import Search from "../Search/Search";
import Autocomplete from "../Autocomplete/Autocomplete";

function SearchBar() {
    return (
        <>
            <Search/>
            <Autocomplete/>
        </>
    );
}

export default SearchBar;