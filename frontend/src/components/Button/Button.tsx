import React from 'react';
import { ButtonProps as MtButtonProps} from "@material-tailwind/react";

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onMouseDown functions
    onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onMouseUp functions
    onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void; // to handle onTouchStart functions
    onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void; // to handle onTouchEnd functions
    children?: React.ReactNode; // make the component able to receive children elements
} & MtButtonProps;

export function Button({
  children, 
  onClick, 
  onMouseDown, 
  onMouseUp, 
  onTouchStart, 
  onTouchEnd, 
  color, 
  disabled, 
  className
}: ButtonProps) {
  return <button 
    onClick={onClick} 
    onMouseDown={onMouseDown} 
    onMouseUp={onMouseUp} 
    onTouchStart={onTouchStart} 
    onTouchEnd={onTouchEnd} 
    color={color} 
    disabled={disabled} 
    className={className}
  >{children}</button>;
}