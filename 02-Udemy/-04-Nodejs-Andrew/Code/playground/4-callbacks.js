// setTimeout(() => {
//   console.log("Tom seconds are up");
// }, 2000);

// const names = ["Andrew", "Jen", "Jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitnde: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Philadephia", (data) => {
//   console.log(data);
// });

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum);
});
