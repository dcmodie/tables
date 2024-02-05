import { useState } from 'react';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';
import { Add } from '@material-ui/icons';

export interface ListItem {
  name: '';
  team: '';
  url: '';
}
const PlayerList = () => {
  const [list, setList] = useState<ListItem[]>([]);

  const renderList = (): React.JSX.Element[] => {
    //return [];
    return list.map((item) => {
      return <Player item={item} />;
    });
  };
  return (
    <div className="flex space-x-14  ">
      <div>
        <div>mylist</div>
        {renderList()}
      </div>
      <AddPlayer list={list} setList={setList} />
    </div>
  );
};
export default PlayerList;
