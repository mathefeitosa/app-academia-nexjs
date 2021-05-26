import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="flex items-center justify-center p-5 text-center h-screen border">
      <div className="flex">
        <div>
          <div className="m-4">
            <Image
              height={200}
              width={200}
              objectFit="contain"
              src="/facebook-logo-2-1.png"
            />
          </div>
          <div
            onClick={signIn}
            className="text-white font-bold bg-blue-500 hover:bg-blue-600 p-3 rounded-2xl"
          >
            Login With Facebook
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
