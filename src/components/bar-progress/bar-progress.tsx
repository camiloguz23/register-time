import style from './bar-progress.module.css';

interface PropProgress {
  max: number;
  value: number;
  title: string;
  color: 'verde' | 'azul' | 'naranja';
}

export const BarProgress = ({ max, value, title, color }: PropProgress) => {
  return (
    <div>
      <progress className={style[`progress-${color}`]} max={max} value={value} /> <span>{title}</span>
    </div>
  );
};
