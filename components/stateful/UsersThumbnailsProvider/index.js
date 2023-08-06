"use client";
import UserThumbnail from "@/components/stateless/UserThumbnail";
import useUsers from "@/hooks/useUsers";

export default function UsersThumbnailsProvider() {
  const users = useUsers();

  const usersThumbnails = users.map((user) => {
    return <UserThumbnail user={user} key={user.id} />;
  });

  return <ul>{usersThumbnails}</ul>;
}
