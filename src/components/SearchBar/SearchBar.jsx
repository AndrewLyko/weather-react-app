import React from 'react';
import Search from "../Search/Search";
import Autocomplete from "../Autocomplete/Autocomplete";

function SearchBar({searchValue, setSearchValue, handleSearch}) {
    return (
        <>
            <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSearch={handleSearch}
            />
            <Autocomplete/>
        </>
    );
}

export default SearchBar;