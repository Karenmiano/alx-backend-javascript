const countStudents = require('./3-read_file_async');

countStudents('database.cv')
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error.message);
  });
console.log('After!');
