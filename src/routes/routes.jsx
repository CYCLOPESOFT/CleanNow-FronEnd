import { Route, Routes } from "react-router-dom";
import Layout from "../pages/Layout";
import Services from "../pages/LandingPage/Services";
import Login from "../pages/Auth/Login";
import RecoveryPassword from "../pages/Auth/RecoveryPassword";
import SendVerification from "../pages/Auth/SendVerification";
import VerificationNumber from "../pages/Auth/VerificationNumber";
import UserData from "../pages/Auth/UserData";
import HomePage from "../pages/Home/HomePage";
import Solicitudes from "../pages/Home/Solicitudes";
import Service from "../pages/Home/ServicesPage";
import PerfilPage from "../pages/Home/PerfilPage";
import ProfileAssistant from "../pages/Home/ProfileAssistant";
import Asistente from "../pages/Home/Assistant";
import ResumeService from "../pages/Request/ResumeService";
import PaymentMethod from "../pages/Request/PaymentMethod";
import Chat from "../pages/Chat/Chat";
import ChatList from "../pages/Chat/ListaChat";
import { ProtectedRoute } from "../components/App/Header/ProtectedRoute";
import DirectionList from "../components/ProfilePage/DirectionsList";
import ProfileEdit from "../components/ProfilePage/ProfileEdit";
import DirectionEdit from "../components/ProfilePage/DirectionEdit";
import SecurityPage from "../components/ProfilePage/Security";
import HelpPage from "../components/ProfilePage/HelpPage";
import AddCard from "../pages/Procesopago/AddCard";
import CreatedRequest from "../pages/Procesopago/CreatedRequest";
import PaymentProcessingScreen from "../pages/Procesopago/PaymentProcessingScreen";
import ScrollToTop from "../components/App/Header/ScrollToTop";
import Opiniones from "../pages/Home/Opiniones"
import Notificaciones from "../pages/Home/Notificaciones" 

const RoutesApp = () => {
  return (
    <Routes>
      <Route element={<ScrollToTop />}> 
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="services" element={<Services />} />
          <Route path="prices" element={<></>} />
          <Route path="register" element={<UserData />} />
          <Route path="contact" element={<VerificationNumber />} />
          <Route path="recoverypassword" element={<RecoveryPassword />} />
          <Route path="send-code" element={<SendVerification />} />
          <Route path="sendNumber" element={<VerificationNumber />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          
            <Route path="home" element={<HomePage />} />
            <Route path="requests" element={<Solicitudes />} />
            <Route path="service" element={<Service />} />
            <Route path="chat" element={<Chat />} />
            <Route path="chatList" element={<ChatList />} />
            <Route path="profile" element={<PerfilPage />} />
            <Route path="editdirection" element={<DirectionEdit />} />
            <Route path="directionlist" element={<DirectionList />} />
            <Route path="editprofile" element={<ProfileEdit />} />
            <Route path="securitypage" element={<SecurityPage />} />
            <Route path="helppage" element={<HelpPage />} />
            <Route path="assistant" element={<Asistente />} />
            <Route path="profileassistant" element={<ProfileAssistant />} />
            <Route path="resumeService" element={<ResumeService />} />
            <Route path="paymentMethod" element={<PaymentMethod />} />
            <Route path="paymentProcessing" element={<PaymentProcessingScreen />} />
            <Route path="createdRequest" element={<CreatedRequest />} />
            <Route path="addCard" element={<AddCard />} />
            <Route path="opinions" element={<Opiniones />} />
            <Route path="notifications" element={<Notificaciones />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RoutesApp;
