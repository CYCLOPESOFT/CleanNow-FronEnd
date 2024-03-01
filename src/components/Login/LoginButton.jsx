import { Button } from "flowbite-react";

const LoginButton = ({ title, image }) => {
  return (
    <Button className="bg-purple-100 hover:!bg-purple-200 my-2 py-2 text-gray-800 font-normal dark:bg-slate-800 dark:text-gray-400 dark:hover:!bg-slate-700">
      <img src={image} className="mr-2 h-5 w-5" alt="Icono Google" />
      {title}
    </Button>
  );
};

export default LoginButton;
