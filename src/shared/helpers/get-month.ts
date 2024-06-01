import { toZonedTime } from 'date-fns-tz';
import { CodeMonthType } from '../types';

// Definir la zona horaria de Colombia
const timeZone = 'America/Bogota';

// Obtener la fecha y hora actuales en UTC
const utcDate = new Date();

// Convertir la fecha y hora actuales a la zona horaria de Colombia
export const zonedDate = (): CodeMonthType => {
  const zonedDate = toZonedTime(utcDate, timeZone);
  return zonedDate.getMonth() as CodeMonthType;
};
