import React from 'react';
export default function LoginForm() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Email</label>
        <input type="email" id="email" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@example.com" required />
      </div>
      <div className="mb-5">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Password</label>
        <input type="password" id="password" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Password" required />
      </div>
      <div className="flex items-start mb-5 justify-between">
        <div className="flex items-center h-5">
          <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-50 dark:text-gray-300">Remember me</label>
        </div>
        <div>
          <a href="#" className="text-xs text-blue-600">Forgot Password</a>
        </div>

      </div>
      <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-4">Sign Up</button>

      <span className="mt-16 text-sm">Don't have an account yet?
        <a className="text-blue-600" href="">  Sign up</a>
      </span>
    </form>
  )

}