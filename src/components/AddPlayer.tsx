import { useState } from 'react';
import { ListItem } from './PlayerList';

interface iProps {
  list: ListItem[];
  setList: () => void;
}

const AddPlayer: React.FunctionComponent = (props: iProps) => {
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

  const handleFormSubmit = (e): void => {
    e.preventDefault();
    if (!input.name || !input.team || !input.url) {
      return;
    }
    setList([...list, input]);
    console.log('add it ');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="string"
          name="name"
          placeholder="name"
          value={input.name}
          onChange={onChange}
        ></input>
        <div>
          <input
            type="string"
            name="team"
            placeholder="team"
            value={input.team}
            onChange={onChange}
          ></input>
        </div>
        <input
          type="string"
          name="url"
          placeholder="url"
          value={input.url}
          onChange={onChange}
        ></input>
        <div>
          <input
            name="notes"
            type="string"
            placeholder="notes"
            value={input.notes}
            onChange={onChange}
          ></input>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddPlayer;
