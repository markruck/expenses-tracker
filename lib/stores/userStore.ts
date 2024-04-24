// Description: User store for managing user state.
// 'use client'

import { signal, useSignal } from "@preact/signals-react";
const user = signal('');

export const useUserserStore = () => {
    const setUser = (value: string) => {
        user.value = value;
    }
    
    return { user, setUser };
    };