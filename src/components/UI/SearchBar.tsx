import React from 'react';
import cx from 'classnames';
import './SearchBar.scss'


interface searchBarProps {
    addClass?: string;
    placeHolder?: string;

}



export const SearchBar: React.FC<searchBarProps> = ({
    addClass,
    placeHolder,
}) : JSX.Element => {

    const classes = cx('search__bar--ui');
    return (
        <input type="text" className={addClass ? `${addClass} ${classes}` : classes} placeholder={placeHolder} />
    )
}