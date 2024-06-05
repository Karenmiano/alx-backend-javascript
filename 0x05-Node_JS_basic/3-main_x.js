const countStudents = require('./3-read_file_async');

countStudents(undefined)
  .then(() => {
    console.log('Done!');
  })
  .catch((error) => {
    console.log(error);
  });
