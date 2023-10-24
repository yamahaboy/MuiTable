import { Users } from "../../../models/Users";

const getUsers = async (): Promise<Users[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data.map(({ id, name, username, website }: Users) => ({
    id,
    name,
    username,
    website,
  }));
};

export default getUsers;
