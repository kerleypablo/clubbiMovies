import axios from 'axios';

export const getSpeciedbyId = async (URL_SPID) => {
  try {
    const { data } = await axios.get(URL_SPID);
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { getSpeciedbyId };
