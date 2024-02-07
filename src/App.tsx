import './App.css';
import EditableCells from './components/EditableCells';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import AddPlayer from './components/AddPlayer';
import PlayerList from './components/PlayerList';
const queryClient = new QueryClient();

function App() {
  //const [localData, setLocalData] = useState(empDataDb?.data);
  const notify = () => toast('Wow so easy !');
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="flex items-center justify-center">
          <ToastContainer />
          {
            //<EditableCells />
          }
          <PlayerList />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
