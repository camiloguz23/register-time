'use client';

import React, { useState } from 'react';
import styles from './tabs.module.css';

interface PropsUiTabs {
  nameTabs: string[];
  onSelectTab: (value: number) => void;
}

export function UiTabs({ nameTabs, onSelectTab }: PropsUiTabs): JSX.Element {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className={styles.contentTabs}>
      {nameTabs.map((item, index) => (
        <button
          className={`${styles.tab} ${selectedTab === index + 1 ? styles.active : ''}`}
          id={styles.tab}
          key={index}
          onClick={() => {
            const numberTab = index + 1;
            setSelectedTab(numberTab);
            onSelectTab(numberTab);
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
