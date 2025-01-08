import React from 'react';

const LoginSection = () => {
  return (
      <div className="bg-white p-8 rounded-md h-auto md:h-[30rem] shadow-lg flex flex-col">
        <h2 className="text-xl font-bold">Existing customer</h2>
       <div className="flex-col mt-auto" style={{justifyContent:'flex-end'}}>
         <button className="bg-[#005F6A] text-white px-5 py-3 mb-2 rounded-full shadow-lg hover:bg-[#005F6A] " style={{fontWeight:'bold'}}>
             Login
         </button>
         <p className="text-xs text-gray-400 text-left" style={{fontWeight:'bold'}}>
           No account yet?{' '}
           <a href="#" className="text-[#005F6A] hover:underline" style={{fontWeight:'bold'}}>
             Register now
           </a>
         </p>
       </div>
      </div>
    // <div className="bg-white p-8 pb-4 rounded-lg shadow-lg h-[430px] flex flex-col">
    //   <h2 className="text-xl font-bold">Existing customer</h2>
    //   <div className="flex-col mt-auto" style={{justifyContent:'flex-end'}}>
    //     <button className="bg-[#005F6A] text-white px-5 py-3 mb-2 rounded-full shadow-lg hover:bg-[#005F6A] " style={{fontWeight:'bold'}}>
    //         Login
    //     </button>
    //     <p className="text-xs text-gray-400 text-left" style={{fontWeight:'bold'}}>
    //       No account yet?{' '}
    //       <a href="#" className="text-[#005F6A] hover:underline" style={{fontWeight:'bold'}}>
    //         Register now
    //       </a>
    //     </p>
    //   </div>
    // </div>
  );
};

export default LoginSection;