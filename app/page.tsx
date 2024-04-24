import { auth } from "auth";

export default async function Index() {
  const session = await auth();

  return (
    <div className="">
      <div className="">Current Session</div>
      <pre className="">{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
