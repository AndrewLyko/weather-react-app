import React from 'react';
import Search from "../Search/Search";
import Autocomplete from "../Autocomplete/Autocomplete";

function SearchBar({searchValue, setSearchValue}) {
    return (
        <>
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Autocomplete/>
        </>
    );
}

export default SearchBar;