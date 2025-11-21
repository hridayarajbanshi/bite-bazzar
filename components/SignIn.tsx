"use client"
import { SignInButton } from '@clerk/nextjs'
import React from 'react'

interface SignInProps {
  isScrolled: boolean;
}

const SignIn = ({ isScrolled }: SignInProps) => {
  return (
    <SignInButton mode='modal'>
      <button className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
        isScrolled ? "text-white bg-black hover:bg-gray-800" : "bg-white text-black hover:bg-gray-100"
      }`}>
        Login 
      </button>
    </SignInButton>
  )
}

export default SignIn