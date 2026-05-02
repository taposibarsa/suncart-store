"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";


const NavBar = () => {

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log("session", user)


  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // 🔥 active class function
  const navLinkClass = (path) =>
    pathname === path
      ? "text-black font-semibold"
      : "text-gray-600 hover:text-black transition";

  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* 🔹 Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SunCart Logo"
            width={180}
            height={60}
            priority
          />
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-xl">
          <Link href="/" className={navLinkClass("/")}>
            Home
          </Link>

          <Link href="/products" className={navLinkClass("/products")}>
            Products
          </Link>

          <Link href="/myprofile" className={navLinkClass("/myprofile")}>
            My Profile
          </Link>
        </div>

        {/* 🔹 Right side */}
       { isPending ? (<span className="loading loading-spinner loading-lg"></span>

       ) : user ? (

        <div className="hidden md:flex items-center">
          <h2>Hello, {user.name}</h2>
          <Link href="/myprofile">
            {/* <button className="px-5 py-2 text-2xl text-black hover:text-3xl transition">
              <CgProfile />
            </button> */}
            <Image
            src="/useravatar.png"
            alt="user image"
            width={60}
            height={60}
            priority
           />
          </Link>
            <Link href="/">
            <button className="px-5 py-2 border-2 text-black rounded-md hover:bg-gray-800 hover:text-white transition" onClick={async()=> await authClient.signOut()}>
              Logout
            </button>
          </Link>
          
        </div>
       ) : (
        
        <Link href="/login">
            <button className="px-5 py-2 border-2 text-black rounded-md hover:bg-gray-800 hover:text-white transition" >
              Login
            </button>
          </Link>

       )}

        {/* 🔹 Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ImCross size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t flex flex-col">
          <Link
            href="/"
            className={navLinkClass("/")}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={navLinkClass("/products")}
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>

          <Link
            href="/myprofile"
            className={navLinkClass("/myprofile")}
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </Link>

          {/* <Link href="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full mt-2 px-5 py-2 border-2 text-black rounded-md">
              <CgProfile />
            </button>
          </Link> */}
          <div className="flex justify-between items-center" >
            <Image
            src="/useravatar.png"
            alt="SunCart Logo"
            width={60}
            height={60}
            priority
          />

          <button className="mt-2 px-5 py-2 border-2 text-black rounded-md">
            <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
          </button>
          </div>

          

        </div>
      )}
    </nav>
  );
};

export default NavBar;