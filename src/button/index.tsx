import React, { FC } from 'react';

import { ButtonProps } from './interface';
import style from './style.module.scss';

const Button: FC<ButtonProps> = (props) => {
  return (
    <button className={style.button} {...props}>
      {props.children}
    </button>
  )
}

export default Button;