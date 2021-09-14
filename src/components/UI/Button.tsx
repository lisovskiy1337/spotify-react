import React from 'react';
import { useState } from 'react';
import cx from 'classnames';
import './Button.scss'

export type ButtonType = 'rect' | 'rounded';

interface ButtonProps {
  iconName?: string;
  typeButton?: ButtonType;
  children?: React.ReactChild | React.ReactNode;
  addClass?: string;
  bgColor?: string
  borderColor?: string;
  textColor?: string;
  hoverBorder?: string;
  hoverText?: string;
  style?: object;

}



export const Button: React.FC<ButtonProps> = ({
  iconName,
  typeButton = 'rect',
  children,
  bgColor,
  borderColor,
  textColor,
  hoverBorder,
  hoverText,
  addClass,


}): JSX.Element => {

  const classes = cx('button', `button--${typeButton}`)
  const buttonStyle = ({ hover }: { hover: any }) => ({
    borderRadius: typeButton === "rect" ? '20px' : '50%',
    border: borderColor ? '1px solid' : '',
    background: bgColor ? bgColor : 'transparent',
    borderColor: hover ? hoverBorder : borderColor,
    color: hover ? hoverText : textColor,
    padding: typeButton === "rect" ? '0 15px' : '0',
    transition: 'all 0.3s ease-in'
  });

  const [hover, setHover] = useState(false);


  return (

    <button className={addClass ? `${addClass} ${classes}` : classes} style={buttonStyle({ hover })} onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}>{iconName ? `<${iconName}>${children}</${iconName}>` : children}</button>
  )

}



// {'button--rect' : typeButton === 'rect', 'button--rounded' : typeButton === 'rounded' }

