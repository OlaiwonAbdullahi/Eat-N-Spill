const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />

        <FormAddFriend />
        <Button>Add Friends</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owe You ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && (
        <p className="black">You and {friend.name} are even</p>
      )}

      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="">💕Friend Name</label>
      <input type="text" />
      <label htmlFor="">🌍Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with X </h2>
      <label htmlFor="">💰Bill Value</label>
      <input type="number" />
      <label htmlFor="">💳Your Expenses</label>
      <input type="text" />
      <label htmlFor="">💱X'expenses</label>
      <input type="text" disabled />
      <label htmlFor="">😁 Who's Paying The Bill</label>
      <select name="" id="">
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>
      <Button>Split Bills</Button>
    </form>
  );
}
