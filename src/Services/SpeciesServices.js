import axios from 'axios';

export const getSpeciedbyId = async (URL_SPID) => {
  try {
    const { data } = await axios.get(URL_SPID);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

const URL_SPECIES = 'https://ghibliapi.herokuapp.com/species';

export const getSpecied = async () => {
  try {
    const { data } = await axios.get(URL_SPECIES);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { getSpeciedbyId };
