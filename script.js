const apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';
const pokemonContainer = document.getElementById('pokemon-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const pokemons = data.results;
    let html = '';

    for (let i = 0; i < pokemons.length; i += 3) {
      const pokemon1 = pokemons[i];
      const pokemon2 = pokemons[i + 1];
      const pokemon3 = pokemons[i + 2];

      // Requisição para obter os dados do primeiro pokémon
      fetch(pokemon1.url)
        .then(response => response.json())
        .then(data => {
          // Criar o card do primeiro pokémon
          const card1 = createPokemonCard(data);
          pokemonContainer.innerHTML += card1;
        })
        .catch(error => {
          console.error('Erro na requisição da API:', error);
        });

      // Requisição para obter os dados do segundo pokémon
      fetch(pokemon2.url)
        .then(response => response.json())
        .then(data => {
          // Criar o card do segundo pokémon
          const card2 = createPokemonCard(data);
          pokemonContainer.innerHTML += card2;
        })
        .catch(error => {
          console.error('Erro na requisição da API:', error);
        });

      // Requisição para obter os dados do terceiro pokémon
      fetch(pokemon3.url)
        .then(response => response.json())
        .then(data => {
          // Criar o card do terceiro pokémon
          const card3 = createPokemonCard(data);
          pokemonContainer.innerHTML += card3;
        })
        .catch(error => {
          console.error('Erro na requisição da API:', error);
        });
    }
  })
  .catch(error => {
    console.error('Erro na requisição da API:', error);
  });

function createPokemonCard(pokemon) {
  // Obter o tipo do pokémon para definir a cor de fundo do card
  const type = pokemon.types[0].type.name;
  let backgroundColor = '';

  switch (type) {
    case 'water':
      backgroundColor = 'rgba(76, 178, 212, 0.6)';
      break;
    case 'fire':
      backgroundColor = 'rgba(249, 92, 90, 0.6)';
      break;
    case 'grass':
      backgroundColor = 'rgba(122, 199, 76, 0.6)';
      break;
    case 'electric':
      backgroundColor = 'rgba(255, 206, 0, 0.6)';
      break;
    case 'psychic':
      backgroundColor = 'rgba(248, 88, 136, 0.6)';
      break;
    case 'ice':
      backgroundColor = 'rgba(99, 196, 228, 0.6)';
      break;
    case 'bug':
      backgroundColor = 'rgba(121, 213, 150, 0.6)';
      break;
    default:
      backgroundColor = 'rgba(255, 255, 255, 0.6)';
      break;
  }

  // Criar o HTML do card
  const html = `
    <div class="card" style="background-color: ${backgroundColor}">
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <h2>${pokemon.name}</h2>
      <span class="type type-${type}">${type}</span>
    </div>
  `;

  return html;
}
``
