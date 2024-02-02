import './App.css';
import TableExample from './components/TableExample';
import EditableCells from './components/EditableCells';
import Button from '@mui/material/Button';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

function App() {
  //const [localData, setLocalData] = useState(empDataDb?.data);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <h1 className="text-3xl font-bold underline flex justify-end">
            Hello world!
          </h1>
          <EditableCells />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
