import UsersProvider from "@/components/stateful/UsersProvider";

export const metadata = {
  title: "Users",
  description: "Users page",
};

const Users = () => {
  return (
    <main>
      <h1>Users</h1>
      <UsersProvider />
    </main>
  );
};

export default Users;
