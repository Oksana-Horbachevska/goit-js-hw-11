import axios from 'axios';

// ===============функція js-fetch запиту =================

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINTS = 'api/';
  const params = new URLSearchParams({
    key: '50383604-c913cf66ede56daf64b093a7e',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  const url = `${BASE_URL}${END_POINTS}?${params}`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Something vent wrong...Please try again');
    }
  });
}

// ===============функція js-axios запиту =================

// async function getImagesByQuery(query) {
//   const baseUrl = '';
//   const endPoints = '';
//   const url = baseUrl + endPoints;
// }
// const params = new URLSearchParams({
//   param1: '1',
//   param2: '2',
//   param3: '3',
// });

// const headers = {
//   key1: 'value',
// };

// const res = await axios.get(url, { headers, params });
// return res.data;
