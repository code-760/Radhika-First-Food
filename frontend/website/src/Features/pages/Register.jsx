import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import burgerHeroImg from '../../assets/burger-hero.jpg';

export default function Register() {
  const navigate = useNavigate();

  // Form input state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  // Password visibility states
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Validation error state
  const [errors, setErrors] = useState({});

  // Success toast state
  const [successMessage, setSuccessMessage] = useState('');

  // Handle change with automatic error clear
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Frontend validation logic
  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Contact Number validation
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,14}$/;
    if (!formData.contact.trim()) {
      newErrors.contact = 'Contact number is required';
    } else if (!phoneRegex.test(formData.contact.trim().replace(/\s/g, ''))) {
      newErrors.contact = 'Please enter a valid contact number';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm password is required';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms & Conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Frontend logging for now
    console.log('Registration submitted successfully:', {
      fullName: formData.fullName,
      email: formData.email,
      contact: formData.contact,
      agreeTerms: formData.agreeTerms,
    });

    setSuccessMessage(`Account created successfully for ${formData.fullName}! Welcome to Foodies.`);

    // Reset form fields
    setFormData({
      fullName: '',
      email: '',
      contact: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    });

    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  // Google Registration placeholder
  const handleGoogleRegister = () => {
    console.log('Google registration clicked');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white overflow-x-hidden font-sans">

      {/* ================= LEFT SIDE (HERO BANNER) ================= */}
      {/* Desktop: ~42% width, Full height. Mobile: Compact hero ~240-280px tall */}
      <div
        className="lg:w-[42%] w-full relative min-h-[250px] sm:min-h-[280px] lg:min-h-screen bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white shrink-0"
        style={{ backgroundImage: `url(${burgerHeroImg})` }}
      >
        {/* Dark gradient overlay for optimal readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/65 pointer-events-none" />

        {/* Top-left Brand Logo Header */}
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-52 h-16 lg:w-64 lg:h-20 flex items-center justify-center">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 500 150"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="orange" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF7A00" />
                  <stop offset="100%" stopColor="#FF3D00" />
                </linearGradient>
              </defs>

              {/* Burger Icon */}
              <rect
                x="10"
                y="15"
                width="120"
                height="120"
                rx="30"
                fill="url(#orange)"
              />

              <path
                d="M33 65C35 45 52 34 70 34C90 34 107 45 109 65H33Z"
                fill="#FFF7ED"
              />

              <path
                d="M30 69H112C117 69 119 73 116 78L113 82H29L26 78C23 73 25 69 30 69Z"
                fill="#FFD166"
              />

              <path
                d="M34 85H108L102 101C100 106 95 109 89 109H53C47 109 42 106 40 101L34 85Z"
                fill="#FFF7ED"
              />

              {/* Sesame */}
              <circle cx="50" cy="50" r="2.5" fill="#FF7A00" />
              <circle cx="64" cy="44" r="2.5" fill="#FF7A00" />
              <circle cx="79" cy="46" r="2.5" fill="#FF7A00" />
              <circle cx="94" cy="52" r="2.5" fill="#FF7A00" />

              {/* Radhika */}
              <text
                x="145"
                y="72"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="52"
                fontWeight="800"
                fill="#FF5A00"
              >
                Radhika
              </text>

              {/* FAST FOOD */}
              <text
                x="148"
                y="108"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="27"
                fontWeight="700"
                letterSpacing="5"
                fill="#ff59008f"
              >
                FAST FOOD
              </text>

              {/* Tagline */}
              <text
                x="148"
                y="132"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="12"
                fontWeight="600"
                letterSpacing="2"
                fill="#f79058ff"
              >
                CRISPY • CHEESY • CRAVEABLE
              </text>
            </svg>
          </div>
        </div>
        {/* Bottom-left Marketing Content */}
        <div className="relative z-10 mt-auto pt-8 lg:pt-0">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white drop-shadow-md mb-2 sm:mb-3">
            Join the world of<br />delicious food
          </h1>
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-md">
            Create your account and enjoy delicious meals delivered right to your doorstep.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE (FORM) ================= */}
      {/* Desktop: ~58% width, Clean white background, Generous spacing */}
      <div className="lg:w-[58%] w-full flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-white overflow-y-auto">
        <div className="w-full max-w-lg mx-auto py-2">

          {/* Top Navigation: Sign In / Sign Up */}
          <div className="flex items-center gap-8 border-b border-gray-100 pb-3 mb-7">
            <Link
              to="/login"
              className="relative pb-3 text-base sm:text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Sign In
            </Link>

            <div className="relative pb-3 text-base sm:text-lg font-bold text-[#FF6B00] cursor-default">
              Sign Up
              {/* Orange Active Underline */}
              <span className="absolute -bottom-[13px] left-0 w-8 h-[3px] bg-[#FF6B00] rounded-full" />
            </div>
          </div>

          {/* Success Toast */}
          {successMessage && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm rounded-xl font-medium flex items-center gap-3">
              <svg className="w-5 h-5 text-emerald-600 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{successMessage}</span>
            </div>
          )}

          {/* Registration Form */}
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {/* 1. Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="fullName">
                Full Name
              </label>
              <div className="relative flex items-center">
                {/* User Icon */}
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-sm text-gray-900 bg-white border ${errors.fullName ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
              </div>
              {errors.fullName && <span className="text-red-500 text-xs mt-0.5">{errors.fullName}</span>}
            </div>

            {/* 2. Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="email">
                Email Address
              </label>
              <div className="relative flex items-center">
                {/* Mail Icon */}
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-sm text-gray-900 bg-white border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
            </div>

            {/* 3. Contact Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="contact">
                Contact Number
              </label>
              <div className="relative flex items-center">
                {/* Phone Icon */}
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <input
                  id="contact"
                  name="contact"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.contact}
                  onChange={handleChange}
                  className={`w-full pl-10 sm:pl-11 pr-4 py-2.5 sm:py-3 text-sm text-gray-900 bg-white border ${errors.contact ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
              </div>
              {errors.contact && <span className="text-red-500 text-xs mt-0.5">{errors.contact}</span>}
            </div>

            {/* 4. Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                {/* Lock Icon */}
                <div className="absolute left-3.5 text-gray-400 pointer-events-none">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 sm:pl-11 pr-11 py-2.5 sm:py-3 text-sm text-gray-900 bg-white border ${errors.password ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
                {/* Show/Hide Password Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  {showPassword ? (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-0.5">{errors.password}</span>}
            </div>


            {/* Terms & Conditions Checkbox */}
            <div className="flex flex-col gap-1 mt-1">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="w-4 h-4 accent-[#FF6B00] rounded cursor-pointer shrink-0"
                />
                <span className="text-xs sm:text-sm text-gray-600">
                  I agree to the{' '}
                  <span className="text-[#FF6B00] hover:underline font-medium cursor-pointer">
                    Terms & Conditions
                  </span>
                </span>
              </label>
              {errors.agreeTerms && (
                <span className="text-red-500 text-xs mt-0.5">{errors.agreeTerms}</span>
              )}
            </div>

            {/* Large Orange CTA Button: Create Account */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 bg-[#FF6B00] hover:bg-[#E66000] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/35 transition-all duration-200 cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Horizontal Divider: "Or continue with" */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-100" />
            <span className="flex-shrink mx-4 text-xs text-gray-400 font-medium">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-100" />
          </div>

          {/* Google Button: "Continue with Google" */}
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white hover:bg-gray-50 active:bg-gray-100 border border-gray-200 hover:border-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
          >
            {/* Standard Google G Logo */}
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
              />
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
              />
              <path
                fill="#FBBC05"
                d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-1.9.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z"
              />
              <path
                fill="#34A853"
                d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z"
              />
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Footer Navigation Link */}
          <div className="text-center mt-6 text-xs sm:text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-[#FF6B00] font-bold hover:underline">
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
