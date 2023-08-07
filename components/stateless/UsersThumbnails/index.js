import UserThumbnail from "@/components/stateless/UserThumbnail";

export default function UsersThumbnails({ users, showDetails }) {
  const usersThumbnails = users.map((user) => {
    return (
      <UserThumbnail
        user={user}
        key={user.id}
        onClick={() => {
          showDetails(user.id);
        }}
      />
    );
  });

  return <ul>{usersThumbnails}</ul>;
}
