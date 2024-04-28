import { auth } from "auth";
import Home from "@/components/home";

/** Index page returns the Home component
 * @example
 * <Index />
 * @returns {React.Component} The Index page
 */

export default async function Index() {
  const session = await auth();

  return (
    <div className="">
      <Home session={session} />
    </div>
  );
}
