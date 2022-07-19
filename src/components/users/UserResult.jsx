import { useContext } from "react";
import { GithubContext } from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import UserItem from "../users/UserItem";

const UserResult = () => {
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((item, index) => (
          <UserItem key={index} user={item} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResult;
