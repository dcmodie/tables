import { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useFetchEmployees } from '../hooks/useFetchEmployees';
import { updateEmployees } from '../api/employees';
import Button from '@mui/material/Button';

function EditableCells() {
  //const { useState } = React;
  const { data: empDataDb } = useFetchEmployees();

  const [localData, setLocalData] = useState(empDataDb?.data);

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Last', field: 'surname' },
    { title: 'Year', field: 'birthYear', type: 'numeric' },
    {
      title: 'City',
      field: 'birthCity',
    },
  ]);

  useEffect(() => {
    setLocalData(empDataDb?.data);
  }, [empDataDb]);
  console.log('empDataDb?.data: ', empDataDb?.data);
  console.log('local cata ', localData);

  const defaultMaterialTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          title="Custom Edit Component Preview"
          columns={columns}
          data={localData}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...localData];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setLocalData([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
      <div className="flex justify-end">
        <Button
          variant="contained"
          onClick={() => {
            updateEmployees(localData);
          }}
        >
          Save
        </Button>
      </div>
    </>
  );
}
export default EditableCells;
// const dataUpdate = [...data];
// const index = oldData.tableData.id;
// dataUpdate[index] = newData;
// setData([...dataUpdate]);
