import mongoose from 'mongoose';

const schemaTime = new mongoose.Schema({
  nombre: String,
  email: String,
  tiempo: {
    semanas: [
      {
        lunes: Number,
        martes: Number,
        miercoles: Number,
        jueves: Number,
        viernes: Number,
        sabado: Number,
        domingo: Number
      }
    ],
    meses: {
      enero: Number,
      febrero: Number,
      marzo: Number,
      abril: Number,
      mayo: Number,
      junio: Number,
      julio: Number,
      agosto: Number,
      septiembre: Number,
      octubre: Number,
      noviembre: Number,
      diciembre: Number
    }
  }
});

export default mongoose.models.Time || mongoose.model('Time', schemaTime);
