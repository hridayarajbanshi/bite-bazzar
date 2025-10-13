"use client"
import React from 'react'
import { useState } from 'react'
import {useRouter } from 'next/navigation'
const page = () => {
   
    const [state, setState] = useState("login")
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    })

    const router = useRouter();
    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        const res = await fetch()
        console.log("Submitting:", formData);
        console.log("Form State:", state);
        alert(`Form submitted for ${state}! Check the console.`);
    }

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-4 bg-white shadow-xl">
                
                {/* Title and Subtitle */}
                <h1 className="text-gray-900 text-3xl mt-6 font-semibold">
                    {state === "login" ? "Login" : "Sign up"}
                </h1>
                <p className="text-gray-500 text-sm mt-2 mb-6">
                    {state === "login" ? "Welcome back to Techcart" : "Create your Techcart account"}
                </p>

                {/* Name Input (Visible only for Sign up) */}
                {state !== "login" && (
                    <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[#60a785] transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Name" 
                            className="border-none outline-none ring-0 w-full pr-4" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                )}

                {/* Email Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[#60a785] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email ID" 
                        className="border-none outline-none ring-0 w-full pr-4" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* Password Input */}
                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[#60a785] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock-icon lucide-lock"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="border-none outline-none ring-0 w-full pr-4" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit" 
                    className="mt-5 w-full h-11 rounded-full text-white bg-[#60a785] hover:bg-[#4a8467] transition-colors font-medium shadow-md"
                >
                    Login
                </button>
                {/* Toggle Link */}
                <p className="text-gray-500 text-sm mt-4 mb-6 cursor-pointer">
                    {state === "login" ? "Don't have an account?" : "Already have an account?"}
                    <Link href={'/register'} className="text-[#60a785] hover:text-[#4a8467] hover:underline ml-1">
                        {state === "login" ? "Sign up" : "Login"}
                    </Link>
                </p>
                
            </form>
        </div>
    )
}


export default page