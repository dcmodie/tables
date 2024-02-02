import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

const data = [
  {
    name: 'Mehmet',
    surname: 'Baran',
    birthYear: 1987,
    birthCity: 'New j',
  },
  {
    name: 'a',
    surname: 'b',
    birthYear: 1983,
    birthCity: 'Bost',
  },
  {
    name: 'Bill',
    surname: 'Brktiaran',
    birthYear: 2003,
    birthCity: 'Frekngiro',
  },
];

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Last', field: 'surname' },
  { title: 'Year', field: 'birthYear', type: 'numeric' },
  {
    title: 'City',
    field: 'birthCity',
  },
];

const defaultMaterialTheme = createTheme();

const TableExample = () => {
  return (
    <>
      <div style={{ maxWidth: '100%' }}>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable columns={columns} data={data} title="Demo Title" />
        </ThemeProvider>
      </div>
      <div></div>
    </>
  );
};

export default TableExample;
