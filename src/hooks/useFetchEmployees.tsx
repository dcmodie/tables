import { useQuery, UseQueryOptions } from 'react-query';
import { fetchEmployees } from '../api/employees';

const useFetchEmployees = () => {
  const results = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchEmployees,
  });
  return results;
};
export { useFetchEmployees };
