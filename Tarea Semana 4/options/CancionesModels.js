const { Schema, model } = require("mongoose");

const SchemaCanciones = Schema(
{
    canciones: 
    {
        type: String,
    },
    
    artista: 
    {
        type: String
    },
    
    album: 
    {
        type: String
    },
    
    anio: 
    {
        type: Number
    },
    
    pais: 
    {
        type: String
    },
    
    activo: 
    {
        type: Boolean,
        default: true
    }

});

module.exports = model("Canciones", SchemaCanciones);