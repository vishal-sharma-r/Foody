import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>This is Profile section</h2>
      <h2>Name :{props.name}</h2>
      <h3>Count: {count}</h3>
      <button
        onClick={
            () => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};
export default Profile;
