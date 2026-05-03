'use client';

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfile = () => {
    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        const getUser = async () => {
            const session = await authClient.getSession();
            const currentUser = session?.data?.user;
            setUser(currentUser);
            setName(currentUser?.name || "");
            setImage(currentUser?.image || "");
        };
        getUser();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();

        try {
            const { data, error } = await authClient.updateUser({
                name,
                image,
            });

            if (error) {
                toast.error("Update Failed");
                return;
            }

            toast.success("Profile Updated Successfully!");
        } catch (err) {
            toast.error("Something went wrong");
        }
    };

    return (
        <div className="min-h-[90vh] flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Update Profile
                </h2>

                <form onSubmit={handleUpdate} className="space-y-5">

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Image URL
                        </label>
                        <input
                            type="text"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg"
                            placeholder="Enter image URL"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                    >
                        Update Information
                    </button>

                </form>

                <ToastContainer />
            </div>
        </div>
    );
};

export default UpdateProfile;