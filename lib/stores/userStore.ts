// Description: User store for managing user state.
import type { User } from "next-auth";
import { signal, useSignal } from "@preact/signals-react";

const user = signal<null | User>(null);

/**
 * User store for managing user state
 * @returns The user object
 * @returns The setUser function
 * @example
 * const { user, setUser } = useUserStore();
 */

export const useUserStore = () => {
    const setUser = (value: User) => {
        user.value = value;
    }
    return { user, setUser };
};