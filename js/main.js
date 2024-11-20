document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const pokemonNamesList = document.querySelector(".pokemon-names");
  const cardWrapper = document.querySelector(".card-wrapper");
  
  const nextButton = document.createElement("a");
  nextButton.id = "next-button";
  nextButton.href = "#";
  nextButton.innerText = "Next >";
  container.appendChild(nextButton);
  
  const previousButton = document.createElement("a");
  previousButton.id = "previous-button";
  previousButton.href = "#";
  previousButton.innerText = "< Previus";
  container.appendChild(previousButton);

  async function ListOfPokemon() {
    pokemonNamesList.innerHTML = "";
    cardWrapper.innerHTML = "";
    previousButton.style.display = "none";
    nextButton.style.display = "block";

    const pokemonUrl = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const respons = await pokemonUrl.json();
    const pokemons = respons.results;
    let linkId = 1;

    for (let i = 0; i < pokemons.length; i++) {
      const result = pokemons[i];

      const pokemonName = document.createElement("li");
      const link = document.createElement("a");
      link.id = linkId;
      link.href = "#";
      link.innerHTML = result.name;

      pokemonName.appendChild(link);
      pokemonNamesList.start = "1";
      pokemonNamesList.appendChild(pokemonName);
      linkId++;
      information(link);
    };

    function information(value) {
      async function pokemonInformation(event) {
        const id = event.target.id;
        const dataUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await dataUrl.json();
        const pokemonName = result.name;
        const pokemonType = result.types[0].type.name;
        const pokemonHeight = result.height;
        const pokemonWeight = result.weight;
        const pokemonImg = result.sprites.front_default;
  
        cardWrapper.innerHTML = "";
  
        const pokemonСard = document.createElement("div");
        pokemonСard.className = "card";
        pokemonСard.innerHTML = `
        <img src="${pokemonImg}" alt="" />
        <p class="name">Имя: ${pokemonName}</p>
        <p class="type">Тип: ${pokemonType}</p>
        <p class="height">Рост: ${pokemonHeight}</p>
        <p class="weight">Вес: ${pokemonWeight}</p>`;
  
        cardWrapper.appendChild(pokemonСard);
      };
      value.addEventListener("click", pokemonInformation);
    };
  };

  async function nextPage() {
    pokemonNamesList.innerHTML = "";
    cardWrapper.innerHTML = "";
    nextButton.style.display = "none";
    previousButton.style.display = "inline-block";

    const pokemonUrl = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`);
    const respons = await pokemonUrl.json();
    const pokemons = respons.results;
    let linkId = 21;

    for (let i = 0; i < pokemons.length; i++) {
      const result = pokemons[i];

      const pokemonName = document.createElement("li");
      const link = document.createElement("a");
      link.id = linkId;
      link.href = "#";
      link.innerHTML = result.name;

      pokemonName.appendChild(link);
      pokemonNamesList.start = "21";
      pokemonNamesList.appendChild(pokemonName);
      linkId++;
      information(link);
    };

    function information(value) {
      async function pokemonInformation(event) {
        const id = event.target.id;
        const dataUrl = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const result = await dataUrl.json();
        const pokemonName = result.name;
        const pokemonType = result.types[0].type.name;
        const pokemonHeight = result.height;
        const pokemonWeight = result.weight;
        const pokemonImg = result.sprites.front_default;
  
        cardWrapper.innerHTML = "";
  
        const pokemonСard = document.createElement("div");
        pokemonСard.className = "card";
        pokemonСard.innerHTML = `
        <img src="${pokemonImg}" alt="" />
        <p class="name">Имя: ${pokemonName}</p>
        <p class="type">Тип: ${pokemonType}</p>
        <p class="height">Рост: ${pokemonHeight}</p>
        <p class="weight">Вес: ${pokemonWeight}</p>`;
  
        cardWrapper.appendChild(pokemonСard);
      };
      value.addEventListener("click", pokemonInformation);
    };
    previousButton.addEventListener("click", ListOfPokemon);
  }
  nextButton.addEventListener("click", nextPage);

  ListOfPokemon();
});