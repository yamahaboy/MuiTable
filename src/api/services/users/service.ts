import { Users } from "../../../models/Users";

const getUsers = async (): Promise<Users[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map((props: Users) => ({
    id: props.id,
    name: props.name,
    username: props.username,
    website: props.website,
  }));
};

export default getUsers;
