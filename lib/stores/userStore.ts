// Description: User store for managing user state.
// 'use client'
import type { User } from "next-auth";
import { signal, useSignal } from "@preact/signals-react";
const user = signal<null | User>(null);

export const useUserStore = () => {
    const setUser = (value: User) => {
        user.value = value;
    }
    
    return { user, setUser };
    };