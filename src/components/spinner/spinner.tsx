import React from 'react';
import style from './spinner.module.css';

export const Spinner = (): JSX.Element => (
  <div className={style['container-spinner']}>
    <span className={style.loader}></span>
  </div>
);
