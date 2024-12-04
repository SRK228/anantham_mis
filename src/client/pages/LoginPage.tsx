import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Eye, EyeOff } from 'lucide-react';
import { useAppDispatch } from '../../common/hooks/redux';
import { login } from '../../common/store/slices/authSlice';
import { Button } from "../../common/components/ui/button";
import { Input } from "../../common/components/ui/input";
import { Checkbox } from "../../common/components/ui/checkbox";
import { Label } from "../../common/components/ui/label";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: localStorage.getItem('savedEmail') || '',
    password: '',
    rememberMe: Boolean(localStorage.getItem('savedEmail'))
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await dispatch(login({ 
        email: formData.email, 
        password: formData.password 
      })).unwrap();

      if (formData.rememberMe) {
        localStorage.setItem('savedEmail', formData.email);
      } else {
        localStorage.removeItem('savedEmail');
      }

      toast.success('Login successful');
      navigate('/');
    } catch (error: any) {
      toast.error(error.message || 'Login failed');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute left-0 top-0 w-1/2 h-full pointer-events-none">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-20 left-20 w-16 h-16 rounded-full bg-[#ff8080]/20"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute top-10 left-40 w-8 h-8 rounded-full bg-[#ff8080]/30"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="absolute top-40 left-10 w-4 h-4 rounded-full bg-[#ff8080]/40"
        />
        
        {/* Geometric Patterns */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute top-60 left-20 w-32 h-32 bg-[#ff8080]/10 rounded-lg overflow-hidden"
        >
          <div className="w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,128,128,0.2)_25%,rgba(255,128,128,0.2)_75%,transparent_75%)]" />
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-40 left-60 w-32 h-32 bg-[#ff8080]/10 rounded-lg overflow-hidden"
        >
          <div className="w-full h-full bg-[radial-gradient(circle,rgba(255,128,128,0.2)_20%,transparent_20%,transparent_40%,rgba(255,128,128,0.2)_40%)]" />
        </motion.div>
        
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute top-80 left-60 w-32 h-32 bg-[#ff8080]/10 rounded-lg overflow-hidden"
        >
          <div className="w-full h-full bg-[linear-gradient(0deg,transparent_45%,rgba(255,128,128,0.2)_45%,rgba(255,128,128,0.2)_55%,transparent_55%)]" />
        </motion.div>
        
        {/* Bottom Curve */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-400 rounded-tr-full" />
      </div>

      {/* Login Form */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-md p-8 relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-rose-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-2xl">A</span>
          </div>
          <h1 className="text-2xl font-semibold text-gray-900">Welcome To Anantham Portal!</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="border-rose-400 focus:ring-rose-400"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="border-rose-400 focus:ring-rose-400 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onCheckedChange={(checked: boolean) => 
                setFormData(prev => ({ ...prev, rememberMe: checked }))
              }
              className="border-rose-400 data-[state=checked]:bg-rose-400"
            />
            <Label htmlFor="rememberMe" className="ml-2">
              Remember Me
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-rose-400 hover:bg-rose-500 transition-colors text-white"
          >
            Sign In
          </Button>

          <div className="text-center">
            <a
              href="#"
              className="text-sm text-gray-600 hover:text-rose-500 transition-colors"
            >
              Forgot Your Password?
            </a>
          </div>
        </form>
      </motion.div>

      {/* Decorative Dots */}
      <div className="absolute right-10 bottom-10 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="w-2 h-2 rounded-full bg-rose-400"
          />
        ))}
      </div>
    </div>
  );
}