import axios from 'axios';

const URL_FILMES = 'https://ghibliapi.herokuapp.com/films';

export const getFilms = async () => {
  try {
    const { data } = await axios.get(URL_FILMES);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { getFilms };
