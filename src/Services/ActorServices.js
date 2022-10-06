import axios from 'axios';

const URL_FILMES = 'https://ghibliapi.herokuapp.com/people';

export const getActor = async () => {
  try {
    const { data } = await axios.get(URL_FILMES);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export const getActorById = async (URL_ID) => {
  try {
    const { data } = await axios.get(URL_ID);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { getActor, getActorById };
