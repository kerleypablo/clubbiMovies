import axios from 'axios';

const URL_LOCATION = 'https://ghibliapi.herokuapp.com/locations';

export const getLocation = async () => {
  try {
    const { data } = await axios.get(URL_LOCATION);
    console.log(data);
    return data;
  } catch (error) {
    return { error: error.response };
  }
};

export default { getLocation };
