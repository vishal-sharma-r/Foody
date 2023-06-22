// import { Outlet } from "react-router-dom";
// import ProfileClass from "./ProfileClass";
// import Profile from "./Profile";
// const About = ()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             <p>Hii I am Vishal Sharma who is working and learning this React App
//                 Project.</p>
//             <p>Still I am working on it !..........</p>
//             <p>I say still...</p>
//             <p>yeah Bro...stil 🚀👨‍🎤🤘</p>
//             <ProfileClass name={"Vishal"}/>
//             {/* <Profile name={"Vishal"}/> */}
           
//         </div>
//     );
// };
// export default About;
import { useState } from "react";
import logo from "../Assets/Img/logo.png";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className=" flex justify-center items-center font-poppins bg-slate-50">
      <div className="flex flex-wrap flex-col m-10 text-center font-bold text-4xl height font-serif">
        <div>
          <h1>
            Welcome to The World of{" "}
            <span className="text-green-800 font-poppins">Foody </span>.
          </h1>
          "Be a Foody"
        </div>
        <div className=" max-w-screen-lg mx-auto pt-10 flex justify-center">
          <img className="w-80"
          src={logo} alt="Food Image" />
        </div>

        <div className="text-center">
          {show ? (
            <>
              <Link to={"/about"}>
                <button
                  className="text-lg py-2 px-2 m-5 rounded-tr-lg cursor-pointer  bg-slate-800 text-zinc-100 "
                  onClick={() => setShow(false)}
                >
                  Hide My Profile
                </button>
              </Link>
              <Outlet />
            </>
          ) : (
            <Link to={"profile"}>
              <button
                className="text-lg py-2 px-2 m-5 rounded-tr-md cursor-pointers bg-slate-800 text-zinc-100 "
                onClick={() => setShow(true)}
              >
                Show My Profile
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;