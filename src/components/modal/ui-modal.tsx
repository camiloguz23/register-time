'use client';

import { useRouter } from 'next/navigation';
import { Icons } from '..';
import style from './modal.module.css';
import { useState } from 'react';

interface PropModal {
  children: React.ReactNode;
}

export const UiModal = ({ children }: PropModal) => {
  const route = useRouter();
  const [classAnimation, setClassAnimation] = useState<string>('open');
  return (
    <div className={`${style.modal} ${style[classAnimation]}`}>
      <div className={style.contentModal}>
        <div className={style['content-close']}>
          <button
            className={style.button}
            onClick={() => {
              setClassAnimation('close');
              setTimeout(() => {
                route.push('/');
              }, 1500);
            }}
          >
            <Icons.Close className={style.icons} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};
