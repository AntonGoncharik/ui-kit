import React, { FC } from 'react';
import cx from 'classnames';

import { ButtonProps } from './interface';
import style from './style.module.scss';

const Button: FC<ButtonProps> = (props) => {
  const styleSize = props.size || 'medium';

  return (
    <button className={cx(style.button, style[styleSize])} {...props}>
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
