import { endpoints } from "@/constants";

async function getUsers(endpoint) {
  const response = await fetch(endpoint);
  const users = await response.json();
  return users;
}

export default async function UsersSSR() {
  const endpoint = endpoints.users;
  const users = await getUsers(endpoint);

  return (
    <main>
      <h1>Users (SSR)</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.first_name}</li>;
        })}
      </ul>
    </main>
  );
}
