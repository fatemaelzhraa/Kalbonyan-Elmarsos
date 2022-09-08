require("../src/db/mongoose");
const { count } = require("../src/models/task");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("631517309ada621d5cfdd27b")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount("631536c6be19dc475c0cc0e8")
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
