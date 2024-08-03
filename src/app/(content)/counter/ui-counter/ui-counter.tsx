'use client';

import React, { useState } from 'react';
import style from './counter.module.css';

export function UiCounter(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className={style.counter}>
      <h3 className={style.number}>{counter}</h3>
      <div className={style.contentBtn}>
        <button className={style.btn} onClick={() => setCounter(counter + 1)}>
          Increment
        </button>
        <button className={style.btn} onClick={() => setCounter(counter - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
}
