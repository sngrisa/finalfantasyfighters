
const urlApi: string = "https://www.moogleapi.com/api/v1";

const getPokemonsData = async () => {
   const baseUrl = await fetch(`${urlApi}/characters`);
   return await baseUrl.json();
}

const getPokemonDataById = async (id: string | number) => {
   const baseUrl = await fetch(`${urlApi}/characters/${id}`);
   return await baseUrl.json();
}


export { getPokemonsData, getPokemonDataById };