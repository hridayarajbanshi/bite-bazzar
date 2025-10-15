"use client"
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';

// Define the custom brand colors for consistency
const TECH_GREEN = '#60a785';
const HOVER_GREEN = '#4a8467';

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   try{
    const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    
    if (res.ok) {
        const form = e.target as HTMLFormElement;
        form.reset();
        alert('Registration successful! Please log in.');
    }else{
        const data = await res.json();
        alert(data.error || 'Registration failed. Please try again.');
        console.log("Registration error:", data);
    }
   }catch(err){

   }
};

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <form onSubmit={handleSubmit} className="sm:w-[400px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-6 bg-white shadow-xl">
                
                {/* Title and Subtitle */}
                <h1 className="text-gray-900 text-3xl mt-4 font-semibold">
                    Create Account
                </h1>
                <p className="text-gray-500 text-sm mt-2 mb-6">
                    Join Techcart for the best tech deals
                </p>

                {/* 1. Full Name Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[${TECH_GREEN}] transition-all">
                    <FaUser className="text-gray-500" size={16} />
                    <input 
                        type="text" 
                        name="fullName" 
                        placeholder="Full Name" 
                        className="border-none outline-none ring-0 w-full pr-4" 
                        value={formData.fullName} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* 2. Email Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[${TECH_GREEN}] transition-all">
                    <FaEnvelope className="text-gray-500" size={16} />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        className="border-none outline-none ring-0 w-full pr-4" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </div>

                {/* 3. Phone Number Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2 focus-within:border-[${TECH_GREEN}] transition-all">
                    <FaPhone className="text-gray-500" size={16} />
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        placeholder="Phone Number (Optional)" 
                        className="border-none outline-none ring-0 w-full pr-4" 
                        value={formData.phoneNumber} 
                        onChange={handleChange} 
                    />
                </div>

                {/* 4. Password Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 pr-4 gap-2 focus-within:border-[${TECH_GREEN}] transition-all">
                    <FaLock className="text-gray-500" size={16} />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="password" 
                        placeholder="Password" 
                        className="border-none outline-none ring-0 w-full" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    
                    />
                </div>

                {/* 5. Confirm Password Input */}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 pr-4 gap-2 focus-within:border-[${TECH_GREEN}] transition-all">
                    <FaLock className="text-gray-500" size={16} />
                    <input 
                        type={showPassword ? "text" : "password"} 
                        name="confirmPassword" 
                        placeholder="Confirm Password" 
                        className="border-none outline-none ring-0 w-full" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required 
                   
                    />
                </div>
                
                {/* Show Password Checkbox */}
                <div className="mt-3 text-left flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="show-password"
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className={`w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-[${TECH_GREEN}] focus:ring-2`}
                            style={{ accentColor: TECH_GREEN }} // Use style for accent color consistency
                        />
                        <label 
                            htmlFor="show-password" 
                            className="ml-2 text-sm font-medium text-gray-700 select-none cursor-pointer"
                        >
                            Show Password
                        </label>
                    </div>
               
                </div>

                {/* Submit Button (Register) */}
                <button 
                    type="submit" 
                    className={`mt-6 w-full h-11 rounded-full text-white bg-[${TECH_GREEN}] hover:bg-[${HOVER_GREEN}] transition-colors font-medium shadow-md`}
                >
                    Register Account
                </button>
                
                {/* Login Link */}
                <p className="text-gray-500 text-sm mt-4 mb-4 cursor-pointer">
                    Already have an account? 
                    <Link href={'/login'} className={`text-[${TECH_GREEN}] hover:text-[${HOVER_GREEN}] hover:underline ml-1`}>
                        Log in here
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default Register;