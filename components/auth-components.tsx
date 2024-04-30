import { signIn, signOut } from "auth";
import { Button } from "./ui/button";

/**
 * Sign in component
 * @example
 * <SignIn provider="google" />
 * @param {Object} props - The props for the component
 * @param {string} props.provider - The provider to sign in with
 * @param {React.ComponentPropsWithRef<typeof Button>} props.props - The props for the button
 * @returns A form with a button to sign in or sign out
 * @see {@link https://next-auth.js.org}
 */

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <Button variant="ghost" className="w-full p-0" {...props}>
        Sign Out
      </Button>
    </form>
  );
}
