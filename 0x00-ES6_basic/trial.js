export default function createIteratorObject(report) {
  const newObj = { 
    ...report,
    [Symbol.iterator]:  function iter() {
      let n = 0;
      const employees = [];
      for (const key in this.allEmployees) {
        employees.push(...this.allEmployees[key]);
      }

      return {
        next() {
          if (n < employees.length) {
            const temp = { value: employees[n], done: false };
            n += 1;
            return temp;
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
  return newObj;
}
