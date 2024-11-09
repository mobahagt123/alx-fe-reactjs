import UserInfo from "./ProfilePage/UserInfo/UserInfo";
import UserContext from "./UserContext";
import { useContext } from "react";

function ProfilePage() {
  const userData = useContext(UserContext)
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default ProfilePage;