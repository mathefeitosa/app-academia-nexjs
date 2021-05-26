import Image from "next/image";

function UserBox({ user }) {
  return (
    <div className=" space-y-3 m-6 ml-8 font-bold text-gray-700">
      <div className="flex justify-center items-center">
        <Image
          className="rounded-full object-cover"
          src="https://randomuser.me/api/portraits/men/61.jpg"
          width={80}
          height={80}
          layout="fixed"
        />
      </div>
      <div className="flex justify-center items-center">{user.name}</div>
    </div>
  );
}

export default UserBox;
