import { useState } from 'react';
import { ListItem } from './PlayerList';
import Button from '@mui/material/Button';

interface iProps {
  list: ListItem[];
  setList([]): void;
}
const AddPlayer = (props: iProps): JSX.Element => {
  const { list, setList } = props;
  const [input, setInput] = useState({
    name: '',
    team: '',
    url: '',
    notes: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!input.name || !input.team || !input.url) {
      return;
    }
    setList([...list, input]);
    setInput({ name: '', team: '', url: '', notes: '' });
    console.log('add it ');
  };

  return (
    <div className="border rounded border-solid p-5">
      <form onSubmit={handleFormSubmit}>
        <input
          className="border rounded border-solid px-2 py-1"
          type="string"
          name="name"
          placeholder="name"
          value={input.name}
          onChange={onChange}
        ></input>
        <div>
          <input
            className="border rounded border-solid px-2 py-1"
            type="string"
            name="team"
            placeholder="team"
            value={input.team}
            onChange={onChange}
          ></input>
        </div>
        <input
          className="border rounded border-solid px-2 py-1"
          type="string"
          name="url"
          placeholder="url"
          value={input.url}
          onChange={onChange}
        ></input>
        <div>
          <input
            className="border rounded border-solid px-2 py-1"
            name="notes"
            type="string"
            placeholder="notes"
            value={input.notes}
            onChange={onChange}
          ></input>
        </div>
        <div className="my-2">
          <Button type="submit" variant="contained">
            add
          </Button>
        </div>
      </form>
    </div>
  );
};
export default AddPlayer;
