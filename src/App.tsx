import './App.css';
import EditableCells from './components/EditableCells';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
const queryClient = new QueryClient();

function App() {
  //const [localData, setLocalData] = useState(empDataDb?.data);
  const notify = () => toast('Wow so easy !');
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div>
          <button onClick={notify}>Notify !</button>
          <ToastContainer />
          <EditableCells />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
