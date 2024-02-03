import { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useFetchEmployees } from '../hooks/useFetchEmployees';
import { updateEmployees } from '../api/employees';
import Button from '@mui/material/Button';
import { tableIcons } from '../icons/material-table-icons';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import {
  diff,
  addedDiff,
  deletedDiff,
  updatedDiff,
  detailedDiff,
} from 'deep-object-diff';

function EditableCells() {
  //const { useState } = React;
  const { data: empDataDb } = useFetchEmployees();

  const [localData, setLocalData] = useState(empDataDb?.data);
  const [disableSave, setDisableSave] = useState(true);
  const notify = () => toast('Wow so easy!');

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
  // console.log('empDataDb?.data: ', empDataDb?.data);
  // console.log('local cata ', localData);

  const defaultMaterialTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultMaterialTheme}>
        <MaterialTable
          icons={tableIcons}
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
            onRowUpdate: (newData, oldData) => {
              return new Promise((resolve, reject) => {
                setTimeout(() => {
                  if (Object.keys(updatedDiff(oldData, newData)).length > 0) {
                    setDisableSave(false);
                  }

                  const dataUpdate = [...localData];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setLocalData([...dataUpdate]);

                  resolve();
                }, 1000);
              });
            },
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
          disabled={disableSave}
          onClick={() => {
            toast('asfd');
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

//TODO
//icons
//update hook react query
