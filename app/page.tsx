import { auth } from "auth";
import Home from "@/components/home";

export default async function Index() {
  const session = await auth();

  return (
    <div className="">
      <Home session={session} />
    </div>
  );
}
