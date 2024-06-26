import { FormatHoursMinutesInterfaces } from '@/shared';
import style from './info-predications.module.css';

interface Props {
  month: string;
  time: FormatHoursMinutesInterfaces;
}

export function InfoPredications({ time, month }: Props): JSX.Element {
  return (
    <section className={style['info-predicaion']}>
      <h2 className={`${style.prettyText}`}>Este mes {month}</h2>
      <p className={`${style.prettyText} ${style['details-info']}`}>
        Horas hechas {time.hours} con {time.minutes} minutos
      </p>
    </section>
  );
}
