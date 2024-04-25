import { auth } from "auth";
import Home from "@/components/home";

export default async function Index() {
  const session = await auth();

  return (
    <div className="">
      <Home session={session} />
      {/* <div className="">Current Session</div> */}
      {/* <pre className="">{JSON.stringify(session, null, 2)}</pre> */}
    </div>
  );
}
