const Pokemon = require('./pokemon');
const Type = require('./type');

Pokemon.belongsToMany(Type, {
    as: "types",
    through: "pokemon_type",
    foreignKey: "pokemon_id",
    otherKey: "type_id"
});

Type.belongsToMany(Pokemon, {
    as: "pokemons",
    through: "pokemon_type",
    otherKey: "pokemon_id",    
    foreignKey: "type_id"
});

module.exports = { Pokemon, Type };