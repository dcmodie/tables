import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';

const data = [
  { name: 'Mohammad', surname: 'Faisal', birthYear: 1995 },
  { name: 'Nayeem Raihan ', surname: 'Shuvo', birthYear: 1994 },
];

const columns = [
  { title: 'Name', field: 'name' },
  { title: 'Surname', field: 'surname' },
  { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
];

const defaultMaterialTheme = createTheme();

const TableExample = () => {
  return (
    <>
      <div style={{ maxWidth: '100%' }}>
        <ThemeProvider theme={defaultMaterialTheme}>
          <MaterialTable
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Last', field: 'surname' },
              { title: 'Year', field: 'birthYear', type: 'numeric' },
              {
                title: 'City',
                field: 'birthCity',
              },
            ]}
            data={[
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
            ]}
            title="Demo Title"
          />
        </ThemeProvider>
      </div>
      <div></div>
    </>
  );
};

export default TableExample;
