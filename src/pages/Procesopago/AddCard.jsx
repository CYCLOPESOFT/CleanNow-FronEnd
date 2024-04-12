import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { RiHomeSmile2Line } from "react-icons/ri";
import { PiStarFourBold } from "react-icons/pi";
import { Button, Label, TextInput } from "flowbite-react";

export default function AddCard() {
    const [expiryDate, setExpiryDate] = useState(null);
    const [cardType, setCardType] = useState("visa"); 

    const handleCardNumberChange = (e) => {
        const cardNumber = e.target.value;
        
        if (/^4/.test(cardNumber)) {
            setCardType("visa");
        } else if (/^5[1-5]/.test(cardNumber)) {
            setCardType("mastercard");
        }
    };

    return (
        <div className="min-h-screen bg-grayHome">
            <div className="bg-purpleHome w-full h-32 rounded-b-xl flex items-center justify-between px-8 mb-8">
                <div>
                    <Link to={"/paymentMethod"}>
                        <IoIosArrowBack className="text-white w-6 h-6" />
                    </Link>
                </div>
                <span className="text-white text-xl">Tarjeta de débito</span>
                <div></div>
            </div>

            <span className="text-black font-bold text-xl ml-3 justify-center w-full">Ingresá los datos de tu tarjeta</span>
            <br />
            <br />
            <form className="flex flex-col gap-4 mb-28 ml-3 md:max-w-md md:mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="cardNumber" value="Número de tarjeta" />
                    </div>
                    <div className="relative">
                        <input
                            type="text"
                            id="cardNumber"
                            onChange={handleCardNumberChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pe-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="**** **** **** ****"
                            required
                        />
                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                            {cardType === "visa" ? (
                                <svg fill="none" className="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21">
                                    <path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/>
                                </svg>
                            ) : (
                                <svg fill="none" className="h-6 text-[#1434CB] dark:text-white" viewBox="0 0 36 21">
                                    <path fill="currentColor" d="M23.315 4.773c-2.542 0-4.813 1.3-4.813 3.705 0 2.756 4.028 2.947 4.028 4.332 0 .583-.676 1.105-1.832 1.105-1.64 0-2.866-.73-2.866-.73l-.524 2.426s1.412.616 3.286.616c2.78 0 4.966-1.365 4.966-3.81 0-2.913-4.045-3.097-4.045-4.383 0-.457.555-.957 1.708-.957 1.3 0 2.36.53 2.36.53l.514-2.343s-1.154-.491-2.782-.491zM.062 4.95L0 5.303s1.07.193 2.032.579c1.24.442 1.329.7 1.537 1.499l2.276 8.664h3.05l4.7-11.095h-3.043l-3.02 7.543L6.3 6.1c-.113-.732-.686-1.15-1.386-1.15H.062zm14.757 0l-2.387 11.095h2.902l2.38-11.096h-2.895zm16.187 0c-.7 0-1.07.37-1.342 1.016L25.41 16.045h3.044l.589-1.68h3.708l.358 1.68h2.685L33.453 4.95h-2.447zm.396 2.997l.902 4.164h-2.417l1.515-4.164z"/>
                                </svg>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="expirationDate" value="Vencimiento" />
                    </div>
                    <DatePicker
                        id="expirationDate"
                        selected={expiryDate}
                        onChange={(date) => setExpiryDate(date)}
                        dateFormat="MM/yyyy"
                        showMonthYearPicker
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholderText="MM/YY"
                        required
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="cvv" value="CVV" />
                        <p className="text-sm text-gray-500">Es el código de 3 dígitos en el dorso de tu tarjeta</p>
                    </div>
                    <TextInput id="cvv" type="text" placeholder="***" required  className="w-24 py-2"/>
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="fullName" value="Nombre y apellido" />
                    </div>
                    <TextInput id="fullName" type="text" placeholder="Tal como figura en la tarjeta" required />
                </div>
                <div>
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Guardar tarjeta</span>
                    </label>
                </div>
                <Link to={'/paymentProcessing'}>
                    <Button type="submit" className="bg-purpleHome hover:bg-purple-800 text-white font-semibold text-center px-16 py-3 rounded-lg mt-8 ml-auto mr-auto md:ml-auto md:mr-28 mb-7">
                        Confirmar ($2.800)
                    </Button>
                </Link>

            </form>

            <footer className="h-28 sticky bottom-0 z-20 text-sm flex items-center justify-around bg-white py-8">
                <Link to="/home">
                    <a href="" className="flex items-center flex-col">
                        <RiHomeSmile2Line className="w-10 h-10" />
                        <span>Home</span>
                    </a>
                </Link>
                <Link to="/requests" className="flex items-center flex-col">
                    <PiStarFourBold className="w-10 h-10" />
                    <span>Solicitudes</span>
                </Link>
                <a href="" className="flex items-center flex-col">
                    <IoChatbubbleEllipsesOutline className="w-10 h-10" />
                    <span>Chat</span>
                </a>
            </footer>
        </div>
    );
}
