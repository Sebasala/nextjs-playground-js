import UsersThumbnailsProvider from "@/components/stateful/UsersThumbnailsProvider";

export const metadata = {
  title: "Users",
  description: "Users page",
};

const Users = () => {
  return (
    <main>
      <h1>Users</h1>
      <UsersThumbnailsProvider />
    </main>
  );
};

export default Users;
