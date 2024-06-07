import readDatabase from '../utils';

export default class StudentsController {
  // get all students from the database
  static getAllStudents(request, response) {
    const filePath = process.argv[2];
    readDatabase(filePath).then((studentsInField) => {
      const orderedKeys = Object.keys(studentsInField).sort();
      response.statusCode = 200;
      response.write('This is the list of our students\n');
      for (const key of orderedKeys) {
        response.write(`Number of students in ${key}: ${studentsInField[key].length}. List ${studentsInField[key].join(', ')}\n`);
      }
      response.end();
    }).catch((error) => {
      StudentsController.catchErrors(response, error);
    });
  }

  // get all students by major
  static getAllStudentsByMajor(request, response) {
    // get the major requested by the user and make sure it is CS or SWE
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      const error = new Error('Major parameter must be CS or SWE');
      StudentsController.catchErrors(response, error);
    } else {
      // read the database and generate list of students in major
      const filePath = process.argv[2];
      readDatabase(filePath).then((studentsInField) => {
        response.statusCode = 200;
        response.send(`List: ${studentsInField[major].join(', ')}`);
      }).catch((error) => {
        StudentsController.catchErrors(response, error);
      });
    }
  }

  static catchErrors(response, error) {
    response.statusCode = 500;
    response.send(error.message);
  }
}
