export interface TimeRegister {
  nombre: string;
  email: string;
  tiempo: Tiempo;
  _id: string;
}

export interface Tiempo {
  semanas: Semana[];
  meses: Meses;
}

export interface Semana {
  lunes: number;
  martes: number;
  miercoles: number;
  jueves: number;
  viernes: number;
  sabado: number;
  domingo: number;
}

export interface Meses {
  enero: number;
  febrero: number;
  marzo: number;
  abril: number;
  mayo: number;
  junio: number;
  julio: number;
  agosto: number;
  septiembre: number;
  octubre: number;
  noviembre: number;
  diciembre: number;
}
