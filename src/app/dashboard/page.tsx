import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const user = await currentUser(); // Get the logged-in user

  if (!user) {
    redirect("/sign-in"); // Redirect if not authenticated
  }

  return <div className="p-6 text-xl">Welcome, {user.firstName}!</div>;
}
