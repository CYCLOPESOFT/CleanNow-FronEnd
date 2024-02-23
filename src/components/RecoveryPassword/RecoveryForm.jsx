export default function RecoveryForm() {
    return (
        <div className="mt-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-50 dark:text-white">Email</label>
            <input type="email" id="email" className="bg-grayInput border border-grayInput text-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter yout email" required />

             <div className="flex items-center h-5 my-6">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                <label htmlFor="remember" className="ms-2 text-sm  text-gray-50 dark:text-gray-300">I'm agree with <a className='text-blue-500' href="">Term of Use</a> and <a className='text-blue-500' href="">Privacy Policy</a></label>
            </div>

                <button className="w-full bg-blueRecoveryPassword text-sm text-white text-center mb-4 rounded-lg h-10 hover:bg-blue-700">Reset password</button>

                <div className='text-center'>
                     <span className="text-gray-400 text-sm">If you need help, contact <a className='text-blue-500' href="">Flexible Support</a></span>
                  
                 </div>
                       
        </div>
    )
}