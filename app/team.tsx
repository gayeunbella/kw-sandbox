'use client'
import React, { useState } from "react";

const leaders = [
  {name: "Nikolaus Fischmesiter", description: "Co-President", image: "/Nikolaus.png", url: "https://www.linkedin.com/in/nikolaus-fischmeister-aaa2b723b/"},
  {name: "Ritam Mukherjee", description: "Co-President", image: "/Ritam.png", url: ""},
  {name: "Rehat Kaur Jammu", description: "Logistics Co-Head", image: "/Rehat.png", url: "https://www.linkedin.com/in/rehat-kaur-jammu/"},
  {name: "Clara Choi", description: "Logistics Co-Head", image: "/Clara.png", url: "https://www.linkedin.com/in/clara-choi-5a0b64285/"},
  {name: "Li Xing Yin", description: "Finance Head", image: "/Li Xing.png", url: "https://www.linkedin.com/in/lixingyin/"},
  {name: "George Woo", description: "Marketing Head", image: "/George.png", url: "https://www.linkedin.com/in/george-woo-a72bb62b2/"},
  {name: "Bella Kim", description: "Tech Head", image: "/Bella.png", url: "https://www.linkedin.com/in/gayeunbella/"},
];

const execs = [
  {name: "Brian Tram", description: "Logistics Exec", image: "/Brian.png", url: "https://www.linkedin.com/in/brian-tram/"},
  {name: "Claire Tran", description: "Finance Exec", image: "/Claire.png", url: "https://www.linkedin.com/in/claire-tran-348026318/"},
  {name: "Eddie Wong", description: "Finance Exec", image: "/Eddie.png", url: ""},
  {name: "Cindy Ma", description: "Marketing Exec", image: "/Cindy.png", url: "https://www.linkedin.com/in/cindy-ma-07ba38307/"},
  {name: "Hamza Ammar", description: "Tech Exec", image: "/Hamza.png", url: "https://www.linkedin.com/in/hamzakammar/"},
  {name: "Matthew Singer", description: "Tech Exec", image: "/Matthew.png", url: "https://www.linkedin.com/in/matthewsingerr/"}
];

function Team() {
  const [user, setUser] = useState({});

  const handleUserHover = (v) => {
    setUser(v);
  };

  return (
    <div id="team" className="w-full bg-gray-900 flex flex-col justify-center items-center md:p-8 py-16 md:pb-24">
      <h2 className="text-white text-2xl font-bold p-2 rounded-lg mb-4">Meet the Team</h2>
      <div className="md:flex w-full md:w-11/12 flex-wrap justify-center">
        {leaders.map((v, index) => (
          <div key={index} className="pb-4 text-center justify-items-center">
            <a
              className="mx-auto flex justify-center w-48 h-48 md:w-36 md:h-36 rounded-full bg-blue-500 m-2 md:mx-10"
              // onMouseEnter={() => handleUserHover(v)}
              // onMouseLeave={() => setUser({})}
              href={v.url}
            >
              <Image
                  src={v.image}
                  alt="profile"
                  className="mx-auto w-full h-full object-cover rounded-full"
                  width={50}
                  height={50}
                  unoptimized
              />
              
            </a>
            <div className="py-1 text-white">
              <div className="text-lg"><b>{v.name}</b></div>
              <div className="text-sm">{v.description}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex w-full md:w-11/12 flex-wrap justify-center">
        {execs.map((v, index) => (
          <div key={index} className="pb-4 text-center justify-items-center">
            <a
              className="mx-auto flex justify-center w-48 h-48 md:w-36 md:h-36 rounded-full bg-blue-500 m-2 md:mx-10"
              // onMouseEnter={() => handleUserHover(v)}
              // onMouseLeave={() => setUser({})}
              href={v.url}
            >
              <Image
                  src={v.image}
                  alt={"profile"}
                  className="mx-auto w-full h-full object-cover rounded-full"
                  width={50}
                  height={50}
                  unoptimized
              />
            </a>
            <div className="py-1 text-white">
              <div className="text-lg"><b>{v.name}</b></div>
              <div className="text-sm">{v.description}</div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="flex w-11/12 flex-wrap justify-center text-white mt-5">
          {JSON.stringify(user) !== "{}" ? 
            <div>
              <span>{user.name}: {user.description}</span>
            </div> : 
            <div>
              Hover to see the user!
            </div>
          }
      </div> */}
    </div>
  );
}
export default Team;