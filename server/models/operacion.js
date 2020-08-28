const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let operacionSchema = new Schema({
    gasto: { type: mongoose.Types.ObjectId, ref: 'Gastos', required: [true, 'Es necesario asociar un gasto'] },
    montoPlan: { type: Number, required: [true, 'Es necesario ingresar el monto planificado'] },
    montoReal: { type: Number, required: false },
    vigencia: { type: Boolean, default: true },
    diferencia: { type: Number, required: false }
});

operacionSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' })
module.exports = mongoose.model('Operacion', operacionSchema);