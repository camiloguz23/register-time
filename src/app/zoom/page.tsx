import React from 'react';
import { UiCounterZoom } from '../(content)/counter/counter-zoom';
import style from './zoom.module.css';

export default function PageZoom(): JSX.Element {
  return (
    <div className={style.zoom}>
      <h3>Contador Zoom</h3>
      <div className={style.contentZoom}>
        <UiCounterZoom />
      </div>
    </div>
  );
}
