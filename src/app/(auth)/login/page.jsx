'use client';
import Link from "next/link";


const LoginPage = () => {

    const handleloginFunc = (e) => {
         e.preventDefault();
         const email = e.target.email.value ;
         const password = e.target.password.value ;
         console.log(email, password)
    }
    return (
        <div className="container mx-auto min-h-[80vh] flex justify-center items-center">
            <div className="p-4 rounded-xl bg-white">
                <h2 className="font-bold text-3xl text-center mb-6">Login your account</h2>

                <form className="space-y-4" onSubmit={handleloginFunc}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email Address</legend>
                        <input type="email" name="email" className="input" placeholder="Type your Email" />                  
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input type="password" name="password" className="input" placeholder="Type your Password" />                  
                    </fieldset>

                    <button className="bg-black w-full text-white px-6 py-2 rounded-md ">Login</button>
                </form>

                <p className="mt-4 text-center" >Don't have an Account? <Link href={"/register"} className=" text-blue-600 text-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;