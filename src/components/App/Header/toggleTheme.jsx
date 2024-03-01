import { Button, Navbar, Tooltip } from "flowbite-react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Tooltip className="" content="Cambiar Tema">
      <Button
        onClick={toggleTheme}
        className="bg-appColor ml-4 active:border-x-transparent hover:!bg-appColor dark:bg-slate-800 dark:hover:text-slate-200 dark:hover:!bg-slate-500 "
      >
        {theme === "light" ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Button>
    </Tooltip>
  );
};
export default ToggleTheme;
