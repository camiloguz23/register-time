interface PropsIcons {
  className?: string;
  size?: string;
}

export const Close = ({ className, size }: PropsIcons): JSX.Element => (
  <svg xmlns='http://www.w3.org/2000/svg' width={size ?? '24px'} height={size ?? '24px'} className={className} viewBox='0 0 20 20'>
    <path
      fill='currentColor'
      d='M2.93 17.07A10 10 0 1 1 17.07 2.93A10 10 0 0 1 2.93 17.07M11.4 10l2.83-2.83l-1.41-1.41L10 8.59L7.17 5.76L5.76 7.17L8.59 10l-2.83 2.83l1.41 1.41L10 11.41l2.83 2.83l1.41-1.41L11.41 10z'
    />
  </svg>
);
