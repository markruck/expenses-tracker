import { auth } from "auth";
import SessionData from "@/components/session-data";

export default async function Index() {
  const session = await auth();

  return (
    <div className="">
      <SessionData session={session} />
      <div className="">Current Session</div>
      <pre className="">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
