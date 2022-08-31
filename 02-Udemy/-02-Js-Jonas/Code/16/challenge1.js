// 'use strict';
// btn.addEventListener('click', function () {
//   // whereAmI(-200000, 4000000);
//   whereAmI(52, 13);
//   whereAmI(19, 73);
//   whereAmI(-33, 18);
// });

// const whereAmI = function (lat, lon) {
//   fetch(
//     `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`
//   )
//     .then(response => response.json())
//     .then(data => {
//       // error handling
//       if (data.status === 401)
//         throw new Error(`${data.status} : ${data.description}`);
//       console.log(`You are in ${data.city},${data.countryName}`);

//       return fetch(`https://restcountries.com/v2/name/${data.countryName}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`${response.status} Error`);
//       return response.json();
//     })
//     .then(data => {
//       const [countryData] = data;
//       return renderCountry(countryData);
//     })
//     .catch(err => console.error(err));
// };
