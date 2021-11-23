const { response, request } = require('express');
const { Pokemon, Type } = require('../models/index.js');

const mainController = {

    homePage: async (request, response) => {

        try {

            const pokemons = await Pokemon.findAll();

            response.render('home', { pokemons });

        } catch (error) {
            console.error('Page introuvable');
        }
        
    },

    pokemonPage: async (request, response) => {

        try {


        const pokemonId = parseInt(request.params.id, 10);
            const pokemon = await Pokemon.findByPk(pokemonId, {
                include: [{association: 'types'}]
            })
            console.log('Contenu de pokemon :', pokemon);
            response.render('detail', { pokemon });

        } catch (error) {
           console.error('Page introuvable');
        }
    },
    
    listeType: async (request, response) => {

        try {

            
                const types = await Type.findAll();
                
                response.render('listeType', { types });
    
            } catch (error) {
               console.error('Page introuvable');
            }

    },

    typePage: async (request, response) => {

        //try {


            const typeId = request.params.id;

                const type = await Type.findByPk(typeId, {
                    include: [{association: 'pokemons'}]
                })
                
                response.render('typePage', { type });
    
            // } catch (error) {
            //    console.error('Page introuvable');
            // }

    }
};

module.exports = mainController;