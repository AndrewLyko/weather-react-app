import React, {useRef} from 'react';

function Search({searchValue, setSearchValue, handleSearch}) {

    const searchRef = useRef(null);


    function handleInput(e) {
        setSearchValue(e.target.value);
    }

    function handleFocus() {
        searchRef.current.classList.add("focus");
    }

    function handleBlur() {
        if (searchValue === "") {
            searchRef.current.classList.remove("focus");
            console.log('dupa')
        }
    }



    return (
        <div className="search" ref={searchRef}>
            <label
                htmlFor="search"
                className="search__lbl"
            >
                Type location:
            </label>
            <input
                className="search__input"
                type="text"
                id="search"
                value={searchValue}
                onChange={handleInput}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <button className="search__btn" onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;