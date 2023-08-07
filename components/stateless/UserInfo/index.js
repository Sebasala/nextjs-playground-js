import Image from "next/image";

export default function UserInfo({ currentUser }) {
  if (currentUser) {
    return (
      <section>
        <Image
          src={currentUser.avatar}
          width={300}
          height={300}
          alt={`${currentUser.first_name} profile image`}
        />
        <h2>
          {currentUser.first_name} {currentUser.last_name}
        </h2>
        <p>{currentUser.employment.title}</p>
        <p>{currentUser.phone_number}</p>
        <p>{currentUser.email}</p>
      </section>
    );
  }
}
