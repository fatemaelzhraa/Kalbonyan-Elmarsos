const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  // useCreataIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
