import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white lg:p-8 p-4 rounded-sm h-auto lg:h-[30rem] shadow-custom-dark flex flex-col">
      <h2 className="text-xl font-bold">Existing customer</h2>
      <div className="flex-col mt-auto justify-end" onClick={()=>navigate("/authorization/oauth")}>
        <button className="bg-[#005F6A] font-bold text-white px-5 py-3 mb-2 rounded-full shadow-lg justify-end hover:bg-[#005F6A] ">
          Login
        </button>
        <p className="text-xs text-gray-400 text-left" style={{fontWeight:'bold'}}>
          No account yet?{' '}
          <a className="text-[#005F6A] hover:underline inline" style={{fontWeight:'bold'}}>
            Register now
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginSection;