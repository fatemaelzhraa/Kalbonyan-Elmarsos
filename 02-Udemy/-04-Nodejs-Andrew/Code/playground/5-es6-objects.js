// Object property shorthand

const name = "Fatema";
const userAge = 22;
const user = {
  name,
  age: userAge,
  location: "Egypt",
};

console.log(user);

// Object destructuring

const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
};

// const label = product.label;
// const stock = product.stock;

// const { label: productLabel, stock, rating } = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
const greet = (name = "User") => {
  console.log("Hello, " + name + "!");
};
greet("Fatema"); // Will print:Hello, Fatema!
greet(); // Will print:Hello, User!
