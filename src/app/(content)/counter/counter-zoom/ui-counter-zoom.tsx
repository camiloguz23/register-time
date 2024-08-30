import React, { useState } from 'react';
import style from './counter-zoom.module.css';

export function UiCounterZoom(): JSX.Element {
  const [assist, setAssist] = useState({ 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 });
  return (
    <div className={style.contentDiv}>
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='1 persona'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [1]: number * 1 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='2 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [2]: number * 2 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='3 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [3]: number * 3 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='4 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [4]: number * 4 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='5 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [5]: number * 5 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='6 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [6]: number * 6 }));
        }}
      />
      <input
        className={style.inputNumber}
        type='number'
        name=''
        id=''
        placeholder='7 personas'
        onBlur={(data) => {
          const number: number = Number(data.target.value);
          setAssist((prev) => ({ ...prev, [7]: number * 7 }));
        }}
      />
      <p className={style.assist}>Total Asistencia: {Object.values(assist).reduce((a, b) => a + b)}</p>
    </div>
  );
}
