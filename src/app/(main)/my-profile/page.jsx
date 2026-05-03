'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getUser = async () => {
            const session = await authClient.getSession();
            setUser(session?.data?.user);
        };
        getUser();
    }, []);

    if (!user) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg text-center">

                <h2 className="text-2xl font-bold mb-6">My Profile</h2>

                <div className="flex flex-col items-center gap-4">

                    <Image
                        src={user?.image || "/default-avatar.png"}
                        width={100}
                        height={100}
                        alt="profile"
                        className="rounded-full"
                    />

                    <h3 className="text-xl font-semibold">
                        {user?.name || "No Name"}
                    </h3>

                    <p className="text-gray-500">
                        {user?.email}
                    </p>

                </div>

                <Link href="/my-profile/update">
                    <button className="mt-6 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                        Update Information
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default MyProfile;