export default function createIteratorObject(report) {
  report[Symbol.iterator] = function () {
    let n = 0;
    const employees = [];
    for (const key in this.allEmployees) {
      employees.push(...this.allEmployees[key]);
    }

    return {  
      next() {
        if (n < employees.length) {
          return {
            value: employees[n++],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  };
  return report;
}
