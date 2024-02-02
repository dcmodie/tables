import axios from 'axios';

const fetchEmployees = async () => {
  const empl = await axios.get('http://localhost:3001/employees');
  return empl;
};

const updateEmployees = async (arrEmp) => {
  //const arrEmp = [];
  await arrEmp.map((empl) => {
    axios.put(`http://localhost:3001/employees/${empl.id}`, empl);
  });

  // arrEmp.map ( (employee)=>{}
  //   //const empl = axios.put(`http://localhost:3001/employees/${employee.id}`, employee);
  // const empl = await axios.put('http://localhost:3001/employees/0', {
  //   id: 0,
  //   name: 'Sam',
  //   surname: 'sfsfsd',
  //   birthYear: 1987,
  //   birthCity: 'New Je',
  // });
  //return empl;
};

export { fetchEmployees, updateEmployees };
