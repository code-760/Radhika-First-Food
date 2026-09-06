import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import burgerHeroImg from '../../../assets/burger-hero.jpg';
import { validateLogin } from '../validations/loginValidation';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateLogin(formData);

    setErrors(newErrors);

    if (Object.keys(newErrors).length !== 0) {
      return;
    }

    console.log('Login attempt with:', { email: formData.email, rememberMe });
    setStatusMessage(`Welcome back! Signed in as ${formData.email}`);
    setTimeout(() => setStatusMessage(''), 4000);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white overflow-x-hidden font-sans">
      {/* ================= LEFT SECTION (HERO) ================= */}
      <div
        className="lg:w-[42%] w-full relative min-h-[240px] sm:min-h-[280px] lg:min-h-screen bg-cover bg-center flex flex-col justify-between p-6 sm:p-8 lg:p-12 text-white shrink-0"
        style={{ backgroundImage: `url(${burgerHeroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/60 pointer-events-none" />

        {/* Brand Logo Header */}
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

        {/* Marketing Heading & Copy */}
        <div className="relative z-10 mt-auto pt-8 lg:pt-0">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-white drop-shadow-md mb-2 sm:mb-3">
            Unlock a world of<br />deliciousness today
          </h1>
          <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed max-w-md">
            Join thousands of food lovers enjoying the fastest delivery and elite quality meals directly at their doorstep.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SECTION (FORM) ================= */}
      <div className="lg:w-[58%] w-full flex items-center justify-center p-6 sm:p-10 lg:p-14 bg-white overflow-y-auto">
        <div className="w-full max-w-lg mx-auto py-4">

          {/* Tabs: Sign In (active) / Sign Up */}
          <div className="flex items-center gap-8 border-b border-gray-100 pb-3 mb-7">
            <div className="relative pb-3 text-base sm:text-lg font-bold text-[#FF6B00] cursor-default">
              Sign In
              <span className="absolute -bottom-[13px] left-0 w-8 h-[3px] bg-[#FF6B00] rounded-full" />
            </div>
            <Link
              to="/register"
              className="relative pb-3 text-base sm:text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Success Toast */}
          {statusMessage && (
            <div className="mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs sm:text-sm rounded-xl font-medium">
              {statusMessage}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Address */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="login-email">
                Email Address
              </label>
              <div className="relative flex items-center">
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  placeholder="alex@foodies.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 sm:py-3 text-sm text-gray-900 bg-white border ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
              </div>
              {errors.email && <span className="text-red-500 text-xs mt-0.5">{errors.email}</span>}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs sm:text-sm font-semibold text-gray-700" htmlFor="login-password">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-2.5 sm:py-3 pr-11 text-sm text-gray-900 bg-white border ${errors.password ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-[#FF6B00]'
                    } rounded-xl outline-none focus:ring-4 focus:ring-[#FF6B00]/10 transition-all placeholder:text-gray-400`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-3.5 text-gray-400 hover:text-gray-600 transition-colors p-1"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && <span className="text-red-500 text-xs mt-0.5">{errors.password}</span>}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 accent-[#FF6B00] rounded cursor-pointer"
                />
                Remember me
              </label>
              <a
                href="#forgot-password"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Password reset link sent!');
                }}
                className="text-[#FF6B00] hover:text-[#E66000] font-semibold transition-colors"
              >
                Forgot Password?
              </a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3.5 bg-[#FF6B00] hover:bg-[#E66000] active:scale-[0.99] text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/35 transition-all duration-200 cursor-pointer"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-100" />
            <span className="flex-shrink mx-4 text-xs text-gray-400 font-medium">Or continue with</span>
            <div className="flex-grow border-t border-gray-100" />
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-3.5">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12 5c1.6 0 3 .6 4.1 1.6l3.1-3.1C17.3 1.7 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z" />
                <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.7-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z" />
                <path fill="#FBBC05" d="M5.6 14.8c-.3-.8-.4-1.8-.4-2.8s.2-1.9.4-2.8L1.9 6.3C.7 8.7 0 10.3 0 12s.7 3.3 1.9 5.7l3.7-2.9z" />
                <path fill="#34A853" d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.2L1.9 16c1.8 3.7 5.6 7 10.1 7z" />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              onClick={handleFacebookLogin}
              className="flex items-center justify-center gap-2.5 py-2.5 px-4 bg-white hover:bg-gray-50 border border-gray-200 hover:border-gray-300 rounded-xl text-xs sm:text-sm font-semibold text-gray-700 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </button>
          </div>

          {/* Footer Link */}
          <div className="text-center mt-6 text-xs sm:text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#FF6B00] font-bold hover:underline">
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
