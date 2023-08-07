"use client";
import Users from "@/components/stateless/Users";
import useUsers from "@/hooks/useUsers";

export default function UsersProvider() {
  const { users, currentUserId, setCurrentUserId } = useUsers();

  const showDetails = (id) => {
    setCurrentUserId(id);
  };

  const currentUser = users.find((user) => user.id === currentUserId);

  return (
    <Users users={users} currentUser={currentUser} showDetails={showDetails} />
  );
}
