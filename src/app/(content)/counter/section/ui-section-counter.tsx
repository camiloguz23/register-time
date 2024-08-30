'use client';

import { UiTabs } from '@/components';
import React, { useState } from 'react';
import style from './section.module.css';
import { UiCounter } from '../ui-counter';
import { UiCounterZoom } from '../counter-zoom';

export function UiSectionCounter(): JSX.Element {
  const [numberTab, setNumberTab] = useState(1);
  return (
    <div className={style.contentSection}>
      <UiTabs nameTabs={['Contador', 'Contador Zoom']} onSelectTab={(value) => setNumberTab(value)} />
      {numberTab === 1 ? <UiCounter /> : <UiCounterZoom />}
    </div>
  );
}
