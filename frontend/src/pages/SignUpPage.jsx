import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import {
  MessageCircleIcon,
  LockIcon,
  MailIcon,
  UserIcon,
  LoaderIcon,
} from "lucide-react";
import { Link } from "react-router";

function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signup, isSigningUp } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(formData);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-900 p-4">
      <div className="w-full fixed  max-w-5xl flex flex-col md:flex-row bg-slate-800 rounded-lg overflow-hidden shadow-lg">
        {/* LEFT SIDE - FORM */}
        <div className="md:w-1/2 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-700/40">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div className="text-center mb-8">
              <MessageCircleIcon className="w-12 h-12 mx-auto text-slate-400 mb-4" />
              <h2 className="text-2xl font-bold text-slate-200 mb-2">
                Create Account
              </h2>
              <p className="text-slate-400">Sign up for a new account</p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="auth-input-label">Full Name</label>
                <div className="relative">
                  <UserIcon className="auth-input-icon" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="input"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="auth-input-label">Email</label>
                <div className="relative">
                  <MailIcon className="auth-input-icon" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="input"
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="auth-input-label">Password</label>
                <div className="relative">
                  <LockIcon className="auth-input-icon" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="input"
                    placeholder="Enter your password"
                  />
                </div>
              </div>

              {/* Submit */}
              <button className="auth-btn" type="submit" disabled={isSigningUp}>
                {isSigningUp ? (
                  <LoaderIcon className="w-full h-5 animate-spin text-center" />
                ) : (
                  "Create Account"
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-6 text-center">
              <Link to="/login" className="auth-link">
                Already have an account? Login
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-slate-900/50">
          <div className="text-center">
            <img
              src="/signup.png"
              alt="People using mobile devices"
              className="w-full h-auto object-contain max-h-[300px] mx-auto"
            />
            <h3 className="mt-6 text-xl font-medium text-cyan-400">
              Start Your Journey Today
            </h3>

            <div className="mt-4 flex justify-center gap-4">
              <span className="auth-badge">Free</span>
              <span className="auth-badge">Easy Setup</span>
              <span className="auth-badge">Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
