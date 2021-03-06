import { signOut, useSession } from "next-auth/client";
import Image from "next/image";

function UserBox() {
  const [session] = useSession();

  return (
    <div className=" space-y-3 m-6 ml-8 font-bold text-gray-700">
      <div className="flex justify-center items-center">
        <Image
          className="rounded-full object-cover"
          src={session.user.image}
          width={80}
          height={80}
          layout="fixed"
        />
      </div>
      <div className="flex justify-center items-center">
        {session.user.name}
      </div>
      <div
        className="flex text-xs text-black justify-center items-center"
        onClick={() => {
          signOut();
        }}
      >
        Logout
      </div>
    </div>
  );
}

export default UserBox;
