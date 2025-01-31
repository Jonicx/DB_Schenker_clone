import { useState } from "react";
import dbLogo from "../../Assets/DB-Schenker-logo.svg";
import dbSimEnabled from "../../Assets/sims_enabled_216_36.png";
import background from "../../Assets/DB-Schenker-Stabio-exterior.jpg"
import { useNavigate } from "react-router-dom";



function RegisterPage({ onBack }) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col justify-between min-h-screen ${
        window.innerWidth <= 1024 ? "bg-white" : "bg-cover bg-center"
      }`}
      style={{
        backgroundImage: window.innerWidth > 1024 ? `url(${background})` : "none",
      }}
    >
      {/* Navbar for small screens */}
      <div className="lg:hidden w-full bg-white shadow-md">
        <div className="flex justify-start py-4" onClick={() => navigate('/')}>
          <img src={dbLogo} alt="DB Schenker" className="h-7 px-5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start lg:justify-center px-10 flex-grow mt-8 lg:mt-0">
        <div className="relative w-full max-w-xl bg-white rounded-sm lg:shadow-lg">
          {/* Logos visible on large screens */}
          <div className="hidden lg:flex items-center justify-between py-5 mb-6 border-b">
            <div className="flex items-center w-full justify-between px-5">
              <img src={dbLogo} alt="DB Schenker" className="h-6" onClick={() => navigate('/')}/>
              <img src={dbSimEnabled} alt="SiMS Enabled" className="h-6" />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col w-full max-w-xl gap-0 lg:px-14 p-6 bg-white">
            <h2 className="mb-4 text-2xl font-extrabold text-black">Register</h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />

            <input
              type="number"
              placeholder="Phone Number"
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />  

            <input
              type="email"
              placeholder="E-mail"
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />

            <button className="w-full px-4 py-4 text-base font-extrabold text-white bg-[#005f6a]/90 hover:bg-[#005f6a]">
              Register
            </button>
          </div>

          {/* Back to Login */}
          <div className="mt-4 text-center border-t py-8">
            <p className="text-center text-base font-extrabold">
              <a href="#" onClick={onBack} className="text-[#005f6a] hover:underline">
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isFormValid = email !== "" && password !== "";

  return isRegistering ? (
    <RegisterPage onBack={() => setIsRegistering(false)} />
  ) : (
    <div
      className={`flex flex-col justify-between min-h-screen ${
        window.innerWidth <= 1024 ? "bg-white" : "bg-cover bg-center"
      }`}
      style={{
        backgroundImage: window.innerWidth > 1024 ? `url(${background})` : "none",
      }}
    >
      {/* Navbar for small screens */}
      <div className="lg:hidden w-full bg-white shadow-md">
        <div className="flex justify-start py-4" onClick={() => navigate('/')}>
          <img src={dbLogo} alt="DB Schenker" className="h-7 px-5" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-start lg:justify-center px-10 flex-grow mt-8 lg:mt-0">
        <div className="relative w-full max-w-xl bg-white rounded-sm lg:shadow-lg">
          {/* Logos visible on large screens */}
          <div className="hidden lg:flex items-center justify-between py-5 mb-6 border-b">
            <div className="flex items-center w-full justify-between px-5">
              <img src={dbLogo} alt="DB Schenker" className="h-6" onClick={() => navigate('/')} />
              <img src={dbSimEnabled} alt="SiMS Enabled" className="h-6" />
            </div>
          </div>

          {/* Form Section */}
          <div className="flex flex-col w-full max-w-xl gap-0 lg:px-14 p-6 bg-white">
            <h2 className="mb-4 text-2xl font-extrabold text-black">Sign In</h2>

            <input
              type="email"
              placeholder="E-mail, SIM ID or Mobile"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-4 mb-4 bg-gray-200 rounded-xs focus:outline-none focus:ring-0"
            />

            <p className="text-sm text-gray-400 font-extralight hover:text-blue-500 mb-4 hover:underline "> Forgot Password?</p>

            <button
              className={`w-full px-4 py-4 text-base font-extrabold text-white ${
                isFormValid
                  ? "bg-[#005f6a]/90 hover:bg-[#005f6a]"
                  : "bg-[#005f6a]/30 hover:bg-[#005f6a]/50"
              }`}
              disabled={!isFormValid}
            >
              Continue
            </button>
          </div>

          {/* Register Link */}
          <div className="mt-4 text-center border-t py-8">
            <p className=" text-center text-base font-extrabold boader-t">
              <a
                href="#"
                onClick={() => setIsRegistering(true)}
                className="text-[#005f6a] hover:underline"
              >
                Register
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Footer Component (Ensures Footer is always at the Bottom)
function Footer() {
  return (
    <footer className="w-full justify-between px-8 flex py-4 text-center text-black/50 bg-white mt-auto">
      {/* Sticky Footer */}
      <div className="flex justify-center space-x-0 gap-2 text-sm">
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Terms
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Legal
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Help
        </a>
      </div>
      <div>
        <p className="text-sm text-center text-black/50">English</p>
      </div>
    </footer>
  );
}


