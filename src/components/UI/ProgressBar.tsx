import React from 'react';
import { useState } from 'react';
import cx from 'classnames';
import styled from 'styled-components';


interface progressBarProps {
    children?: React.ReactChild | React.ReactNode;
    addClass?: string;
    backgroundColor?: string;
    progressColor?: string;

}

export const ProgressBar: React.FC<progressBarProps> = ({
    children,
    addClass,
    backgroundColor,
    progressColor
}): JSX.Element => {


    const ProgressBarDiv = styled.div<progressBarProps>`
    height: 4px;
    background: ${backgroundColor? backgroundColor : "#5e5e5e"};
    display: flex;
    align-items: center;
    position: relative;

    &:before{
        content: '';
        width: 20%;
        height: 4px;
        background: ${progressColor? progressColor : "#1ed760"};
    }
`;


    const classes = cx('prog__bar--ui');
    return (
        <ProgressBarDiv className={addClass ? `${addClass} ${classes}` : classes} progressColor={progressColor} backgroundColor={backgroundColor}>{children}</ProgressBarDiv>
    )
}