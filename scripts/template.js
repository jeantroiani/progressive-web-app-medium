export const appendPokemons = (pokemons) => {
    let cardHTML = "";
    pokemons.forEach( pokemon => {
        cardHTML += generateCarCards(pokemon);
    });

    document.querySelector('.pokedex').insertAdjacentHTML('beforeend', cardHTML);
}


const generateCarCards = (pokemon) => {
    const { id, name, height, weight } = pokemon;
    let template = document.querySelector('#card').innerHTML;
    template = template.replace('{{id}}', id);
    template = template.replace('{{name}}', name);
    template = template.replace('{{weight}}', height);
    template = template.replace('{{height}}', weight);    
    return template;
}