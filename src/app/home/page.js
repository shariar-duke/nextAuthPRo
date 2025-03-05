import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    redirect("/"); // Redirects to the home page if there's no user session
  }

  return (
    <div className="flex flex-col items-center m-4">
      <h1 className="text-3xl my-2">{session?.user?.name}</h1>
      <Image
        className="rounded-full"
        height={72}
        width={72}
        src={session?.user?.image || "/default-avatar.png"} // Use a default image if session?.user?.image is not available
        alt={session?.user?.name}
      />
    </div>
  );
}
