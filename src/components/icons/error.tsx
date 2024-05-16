import React from 'react';

interface PropsIcons {
  className?: string;
  size?: string;
}

export const Error = ({ className, size }: PropsIcons): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size ?? '24px'} height={size ?? '24px'} className={className} viewBox='0 0 16 16'>
    <path
      fill='currentColor'
      d='M5.085 2A1.5 1.5 0 0 1 6.5 1h3a1.5 1.5 0 0 1 1.415 1h.585A1.5 1.5 0 0 1 13 3.5v2.1A5.5 5.5 0 0 0 7.337 15H4.5A1.5 1.5 0 0 1 3 13.5v-10A1.5 1.5 0 0 1 4.5 2zM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm8.5 8.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M10.5 8a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5m0 5.125a.625.625 0 1 0 0-1.25a.625.625 0 0 0 0 1.25'
    />
  </svg>
);
