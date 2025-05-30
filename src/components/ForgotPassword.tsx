import React, { useState } from 'react';
import { X, ArrowLeft, Mail } from 'lucide-react';

interface ForgotPasswordProps {
  onClose: () => void;
  onBack: () => void;
}

export default function ForgotPassword({ onClose, onBack }: ForgotPasswordProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    try {
      // Here you would typically call your password reset API
      // For demo purposes, we'll just show success message
      setIsSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-lg w-full max-w-xl relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X size={24} />
      </button>

      <div className="p-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
        >
          <ArrowLeft size={20} />
          <span>Back to login</span>
        </button>

        <h2 className="text-2xl font-bold mb-2">Reset Password</h2>
        <p className="text-gray-600 mb-6">
          Enter your email address and we'll send you instructions to reset your password.
        </p>

        {isSubmitted ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
            <p>Password reset instructions have been sent to your email address.</p>
            <p className="mt-2">Please check your inbox and follow the instructions.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-100 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
                <Mail className="absolute left-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Send Reset Instructions
            </button>
          </form>
        )}
      </div>
    </div>
  );
}