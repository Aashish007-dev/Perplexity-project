import React, { useState } from 'react'
import { Link } from 'react-router'

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Register submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-2xl border border-[#31b8c6]/40 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/20 backdrop-blur">
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#31b8c6]">Create account</p>
            <h1 className="mt-3 text-3xl font-bold text-white">Register now</h1>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="mb-2 block text-sm font-medium text-slate-200">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/40"
                required
              />
            </div>

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
                placeholder="Create a password"
                className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-[#31b8c6] focus:ring-2 focus:ring-[#31b8c6]/40"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#31b8c6] px-4 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-900/30 transition hover:bg-[#2aa3af]"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-slate-300">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-[#31b8c6] hover:text-[#2aa3af]">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register