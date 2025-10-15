'use client';

import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const TECH_GREEN = '#60a785';
const HOVER_GREEN = '#4a8467';

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    // Basic client-side validation
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.password || !formData.confirmPassword) {
      setError('Please fill all required fields.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.error || 'Registration failed. Try again.');
        setLoading(false);
        return;
      }

      // success — clear form & redirect to login
      setFormData({ name: '', email: '', phoneNumber: '', password: '', confirmPassword: '' });
      alert('Registration successful! Please log in.');
      router.push('/login');
    } catch (err) {
      console.error('Register error', err);
      setError('Internal error. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
      <form onSubmit={handleSubmit} className="sm:w-[420px] w-full text-center border border-gray-300/60 rounded-2xl px-8 py-6 bg-white shadow-xl">
        <h1 className="text-gray-900 text-3xl mt-4 font-semibold">Create Account</h1>
        <p className="text-gray-500 text-sm mt-2 mb-6">Join Techcart for the best tech deals</p>

        {/* Name */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 gap-3 transition-all">
          <FaUser className="text-gray-500 ml-2" size={16} />
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className="border-none outline-none ring-0 w-full pr-4 text-sm"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 gap-3 transition-all">
          <FaEnvelope className="text-gray-500 ml-2" size={16} />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="border-none outline-none ring-0 w-full pr-4 text-sm"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 gap-3 transition-all">
          <FaPhone className="text-gray-500 ml-2" size={16} />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            className="border-none outline-none ring-0 w-full pr-4 text-sm"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 pr-3 gap-3 transition-all">
          <FaLock className="text-gray-500 ml-2" size={16} />
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0 w-full text-sm"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(v => !v)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            className="p-2"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-4 pr-3 gap-3 transition-all">
          <FaLock className="text-gray-500 ml-2" size={16} />
          <input
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border-none outline-none ring-0 w-full text-sm"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        {/* Show Password checkbox */}
        <div className="mt-3 text-left flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="show-password"
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(!showPassword)}
              className="w-4 h-4 border-gray-300 rounded"
              style={{ accentColor: TECH_GREEN }}
            />
            <label htmlFor="show-password" className="ml-2 text-sm font-medium text-gray-700 select-none cursor-pointer">
              Show Password
            </label>
          </div>
        </div>

        {/* Error */}
        {error && <p className="text-red-600 mt-3 text-sm">{error}</p>}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full h-11 rounded-full text-white transition-colors font-medium shadow-md"
          style={{
            backgroundColor: TECH_GREEN,
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Registering...' : 'Register Account'}
        </button>

        <p className="text-gray-500 text-sm mt-4 mb-4 cursor-pointer">
          Already have an account?
          <Link href="/login" className="ml-1" style={{ color: TECH_GREEN }}>
            Log in here
          </Link>
        </p>
      </form>
    </div>
  );
}
