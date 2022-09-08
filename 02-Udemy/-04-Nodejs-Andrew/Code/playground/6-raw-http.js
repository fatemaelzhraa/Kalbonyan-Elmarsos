const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=ac08234e47e450857c0aa5d2d2dcbebc&query=45,-75&units=f";
const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    console.log(chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("An error", error);
});
request.end();
