import UserInfo from "@/components/stateless/UserInfo";
import UsersThumbnails from "@/components/stateless/UsersThumbnails";

export default function Users({ users, currentUser, showDetails }) {
  return (
    <div>
      <UsersThumbnails users={users} showDetails={showDetails} />
      <UserInfo currentUser={currentUser} />
    </div>
  );
}
