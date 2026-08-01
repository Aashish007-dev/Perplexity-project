import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hook/useAuth'
import {useSelector} from 'react-redux'
import { Navigate } from 'react-router'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()

  const { handleLogin, loading } = useAuth();

  const user = useSelector((state) => state.auth.user);

  if(!loading && user){
      return <Navigate to="/" replace/>
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  

  const handleSubmit = async (event) => {
    event.preventDefault()
    await handleLogin(formData)
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#31b8c6]">Welcome back</p>
            <h1 className="mt-3 text-3xl font-bold text-white">Login to your account</h1>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/40"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-200">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/40"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#31b8c6] px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition hover:bg-[#2aa3af]"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-slate-300">
              Don’t have an account?{' '}
              <Link to="/register" className="font-semibold text-[#31b8c6] hover:text-[#2aa3af]">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login