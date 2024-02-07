import { useState } from 'react';
import Player from '../components/Player';
import AddPlayer from '../components/AddPlayer';

export interface ListItem {
  name: '';
  team: '';
  url: '';
}
const PlayerList = () => {
  const [list, setList] = useState<ListItem[]>([]);

  const renderList = (): React.JSX.Element[] => {
    return list.map((item) => {
      return <Player item={item} />;
    });
  };
  return (
    <div className="grid grid-cols-1 gap-3">
      <div className="h-64 overflow-auto border rounded border-solid">
        <div className=" px-2 py-1">
          <div className="text-center">Player List</div>
          {renderList()}
        </div>
      </div>
      <AddPlayer list={list} setList={setList} />
    </div>
  );
};
export default PlayerList;
