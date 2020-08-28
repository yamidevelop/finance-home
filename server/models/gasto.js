const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let gastosValidos = {
    values: ['FIJO', 'VARIABLE'],
    message: '{VALUE} no es un gasto válido'
}

let estadosValidos = {
    values: ['vigente', '']
}

let gastoSchema = new Schema({
    nombre: { type: String, required: [true, 'El nombre es necesario'], unique: true },
    tipo: { type: String, enum: gastosValidos },
    compartido: { type: Boolean, default: true, required: [true, 'Debe definir si es compartido o no'] },
    vigente: { type: Boolean, default: true },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
})

gastoSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });

module.exports = mongoose.model('Gastos', gastoSchema);