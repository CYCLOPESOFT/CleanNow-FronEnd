export default function RegistrationButton ({title,imageUrl}){
    return(
    <button type="button" className="lg:justify-normal md:justify-center justify-center lg:w-max md:w-full w-full text-gray-100 bg-transparent hover:bg-gray-800 border-2 border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mb-2 mr-1">
         <img className="w-5 h-5 mr-2" src={imageUrl} />
         <span className="text-xs">{title}</span>
    </button>
    )
}