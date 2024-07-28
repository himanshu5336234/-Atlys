import  { useState } from 'react';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import CustomModal from './UI/CustomModal';



const Onboarding= ({isOpen,setModalOpen}:{isOpen:boolean,setModalOpen:(param:boolean)=>void}) => {
  const [isLogin,setIsLogin]=useState(false)

  return (

      <CustomModal isOpen={isOpen} onClose={() => setModalOpen(false)}>
       {!isLogin ? <SignUpForm setIsLogin={setIsLogin} />:<LoginForm setIsLogin={setIsLogin}/>}
      </CustomModal>

  );
};

export default Onboarding;
