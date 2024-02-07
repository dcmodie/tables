import { ListItem } from './PlayerList';

const Player = ({ item }: { item: ListItem }) => {
  return (
    <div className="flex my-2.5">
      <img src={item.url} className="size-12" />
      <div>
        <div className=" px-1 ">{item.name}</div>
        <div className=" px-1 ">{item.team}</div>
      </div>
    </div>
  );
};
export default Player;
/*
https://images.unsplash.com/photo-1501425359013-96058e410cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Ymx1ZSBza3l8fHx8fHwxNzA3MjkxNjkw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080
*/
