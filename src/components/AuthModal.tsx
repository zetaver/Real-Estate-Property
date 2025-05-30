import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { signIn, UserCredentials } from '../lib/auth';
import { useNavigate } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    retypePassword: '',
    userType: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.retypePassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const credentials: UserCredentials = {
        email: formData.email,
        password: formData.password
      };

      const { user } = await signIn(credentials);
      onClose();
      
      // Navigate based on user role
      if (user.role === 'admin') {
        navigate('/dashboard/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (showForgotPassword) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <ForgotPassword 
          onClose={onClose}
          onBack={() => setShowForgotPassword(false)}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl flex overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* Left side - Image */}
        <div className="w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&h=900&q=80" 
            alt="Welcome" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-4xl font-bold mb-4">Welcome to Your<br />Real Estate Website</h2>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">
            {isLogin ? 'Sign into your account' : 'Create an account'}
          </h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {!isLogin && (
              <>
                <div className="relative">
                  <input
                    type={showRetypePassword ? "text" : "password"}
                    name="retypePassword"
                    placeholder="Retype Password"
                    value={formData.retypePassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowRetypePassword(!showRetypePassword)}
                    className="absolute right-3 top-2.5 text-gray-500"
                  >
                    {showRetypePassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>

                <div>
                  <select
                    name="userType"
                    value={formData.userType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select User Type</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="agent">Agent</option>
                  </select>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                    required
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree with terms & conditions
                  </label>
                </div>
              </>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>

            {isLogin && (
              <>
                <div className="text-center text-gray-500">or</div>
                <button
                  type="button"
                  className="w-full bg-[#1877f2] text-white py-2 rounded-lg hover:bg-[#1865d3] transition-colors"
                >
                  Login with Facebook
                </button>
                <button
                  type="button"
                  className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
                  Login with Google
                </button>
                <button
                  type="button"
                  className="w-full bg-[#1da1f2] text-white py-2 rounded-lg hover:bg-[#1a91da] transition-colors"
                >
                  Login with Twitter
                </button>
              </>
            )}
          </form>

          <div className="mt-6 flex justify-between text-sm">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 hover:underline"
            >
              {isLogin ? 'Register here!' : 'Back to login'}
            </button>
            <button 
              onClick={() => setShowForgotPassword(true)}
              className="text-blue-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}