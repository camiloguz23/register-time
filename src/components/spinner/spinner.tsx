import React from 'react';
import style from './spinner.module.css';

export const Spinner = () => {
  return (
    <div className={style['container-spinner']}>
      <span className={style.loader}></span>
    </div>
  );
};
