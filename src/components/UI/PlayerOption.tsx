import React from 'react'
import cx from 'classnames';


interface optionProps {
    children?: React.ReactChild | React.ReactNode;
    addClass?: string;
}

export const PlayerOption: React.FC<optionProps> = ({
    children,
    addClass
}) : JSX.Element => {

    const classes = cx('option--ui');
    return (
        <div className={addClass ? `${addClass} ${classes}` : classes}>{children}</div>
    )
}




