import React from "react";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";

class Profile extends React.Component {
  // constructor
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy Name",
        location: "Dummy Location",
      },
    };
    // console.log("constructor");
  }
  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/Vishal-Sharma-R"
    );
    const json = await data?.json();
    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }
  // render method --
  render() {
    return (
      <div className="flex-1 flex justify-center items-center font-poppins bg-slate-50">
        <div className="flex flex-col justify-center items-center rounded-md mt-4 gap-5 shadow-lg border w-fit max-w-xs">
          <p className=" text-xl font-bold text-center py-2">About Me</p>
          <img
            className="rounded-full w-[150px] h-[150px] border-none align-middle"
            src={this?.state?.userInfo?.avatar_url}
            alt="user photo"
          />
          <div className="bg-slate-900 text-white p-4 rounded-sm">
            <p className="pb-4 text-lg font-normal text-slate-300 text-center">
              {this?.state?.userInfo?.name}
              <br></br>
              {this?.state?.userInfo?.bio}
            </p>
            <p className="pb-4 text-lg font-normal text-slate-300 text-center">
              ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
              Developer
            </p>
            <div className=" text-center w-full flex items-center justify-center mt-2">
              <a
                href={"https://github.com/Vishal-Sharma-R"}
                className="mb-2 pr-4 hover:scale-105"
                target="_blank"
              >
                <i className="bg-[#333] icon--i">
                  <SiGithub className="m-auto" />
                </i>
              </a>
              <a
                href={"https://www.linkedin.com/in/vishal-sharma-a5582a249"}
                className="mb-2 pr-4 hover:scale-105"
                target="_blank"
              >
                <i className="bg-[#0e76a8] icon--i">
                  <SiLinkedin className="m-auto" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
