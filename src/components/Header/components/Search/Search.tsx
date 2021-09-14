import React from 'react'
import { SearchBar } from '../../../UI/SearchBar'
import './Search.scss'

const Search = () => {
    return (
        <div className="header__search">
            <SearchBar addClass="header__search-input" placeHolder="Search" />
        </div>
    )
}

export default Search
