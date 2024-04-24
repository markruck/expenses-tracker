'use client'

import { useUserserStore } from "@/lib/stores/userStore";

export default function TestPage() {
    const { user, setUser } = useUserserStore();
    return (
        <div>
            <h1>{user.value}</h1>
        </div>
    )
}