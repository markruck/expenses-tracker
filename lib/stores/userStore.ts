// Description: User store for managing user state.
import type { User } from "next-auth";
import { signal, useSignal } from "@preact/signals-react";

const user = signal<null | User>(null);

/**
 * User store for managing user state
 * @example
 * const { user, setUser } = useUserStore();
 * @returns {object} The user object
 * @returns {function} The setUser function
 */

export const useUserStore = () => {
    const setUser = (value: User) => {
        user.value = value;
    }
    return { user, setUser };
};