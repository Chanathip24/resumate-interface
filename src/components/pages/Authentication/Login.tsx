import { Link } from 'react-router-dom'

import { Button } from '@/components/common/Button'
import { authProviders } from '@/constants/'

const Login = () => {
  return (
    <div className="bg-theme-night-300 w-xl flex flex-col gap-y-8 rounded-2xl px-8 py-6">
      <div className="flex flex-col">
        <h4 className="flex-shrink-0">ResuMATE</h4>
        <h2>Login to your account</h2>
      </div>
      <div className="w-full">
        <form className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="bg-theme-night-50 border-theme-night-400 w-full rounded-lg border px-4 py-2"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="bg-theme-night-50 border-theme-night-400 w-full rounded-lg border px-4 py-2"
            />
            <p className="flex justify-end">Forgot Password?</p>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <Button type="submit" variant="secondary" className="text-theme-night-50 w-full font-semibold">
          Get Started
        </Button>
        or continue with
        <div className="flex gap-x-2">
          {authProviders.map((provider) => (
            <button className="bg-theme-white text-theme-night-50 rounded-4xl px-6 py-2">{provider.icon}</button>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-x-1">
        <p>Dont have account yet?</p>
        <Link to="/register" className="text-theme-registration hover:text-theme-white font-medium underline">
          Register for free
        </Link>
      </div>
    </div>
  )
}

export default Login
