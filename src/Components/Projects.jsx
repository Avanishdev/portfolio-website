import React, { useState } from "react";
import { AiTwotoneAppstore } from "react-icons/ai";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "../Components/Global.css";
import project1 from "../Components/SocialLinks/flama.png";
import project2 from "../Components/SocialLinks/portfolio project ss.png";
import project3 from "../Components/SocialLinks/unipayconnect.png";
import chikitsa from "../Components/SocialLinks/chikitsa.png";
import fucturica from "../Components/SocialLinks/fucturica.png";
import takeuforward from "../Components/SocialLinks/takeuforward.png";
import traveladvisor from "../Components/SocialLinks/traveladvisor.png";
import portfolio from "../Components/SocialLinks/portfolio.png";
import github from "../Components/SocialLinks/github(2).png";
import { useNavigate } from "react-router-dom";

const Projects = ({ bgcolor, darkmode }) => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);
  const navigate = useNavigate();

  const fetchRepos = async () => {
    if (dataFetched) return;
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.github.com/users/Avanishdev/repos"
      );
      const data = await response.json();
      setRepos(data);
      setFilteredRepos(data?.filter((repo) => repo.visibility === "public"));
      setDataFetched(true);
    } catch (error) {
      console.error("Error fetching repositories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <div className="p-3"> */}
      <div
        className={` ${
          darkmode === "dark" ? `bg-${bgcolor}` : `bg-white`
        } p-10 rounded-lg`}
      >
        <h1
          className={`text-3xl font-bold ${
            bgcolor === "white" ? "text-black" : "text-white"
          }`}
        >
          Projects
        </h1>

        <div className="flex gap-5 flex-wrap my-5">
          {/* UnipayConnect Card */}
          <a href="https://www.npmjs.com/package/unipayconnect">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={project3}
                alt="UnipayConnect Project"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  UnipayConnect: A Scalable Payment Integration Library (React,
                  Node.js, Express.js, Redis, JWT, RESTful APIs)
                </h1>
              </div>
            </div>
          </a>

          {/* FLAMA E-commerce Card */}
          <a href="https://ecommerce-website-alpha-nine.vercel.app/">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={project1}
                alt="FLAMA E-commerce Platform"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  FLAMA: An E-commerce platform (MongoDB, Express.js, React,
                  Node.js, Stripe, Redux, Styled-components, REST API, JWT)
                </h1>
              </div>
            </div>
          </a>

          {/* Chikitsa Website Card */}
          <a href="https://www.chikitsa.io/">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={chikitsa}
                alt="Chikitsa Website"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Chikitsa Website.
                </h1>
              </div>
            </div>
          </a>

          {/* Fucturica Website Card */}
          <a href="https://fucturicatechnologies.com/">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={fucturica}
                alt="Fucturica Website"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Fucturica Website.
                </h1>
              </div>
            </div>
          </a>

          {/* Travel Advisor Card */}
          <a href="https://travel-advisor-flax-nine.vercel.app/">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={traveladvisor}
                alt="Travel Advisor Website"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Travel Advisor (Material UI, JavaScript, React)
                </h1>
              </div>
            </div>
          </a>

          {/* Takeuforward Card */}
          <a href="https://takeuforward-banner.vercel.app//">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={takeuforward}
                alt="Takeuforward Website"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Takeuforward Website (Tailwind CSS, JavaScript, React)
                </h1>
              </div>
            </div>
          </a>

          {/* Portfolio Website Card */}
          <a href="https://avanish-portfolio-site.netlify.app/">
            <div
              className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg transition delay-150 ${
                bgcolor === "white"
                  ? "bg-[#EEF5FA]"
                  : "bg-black border border-[#A6A6A6]"
              } h-full shadow-lg`}
            >
              <img
                src={portfolio}
                alt="Portfolio Website"
                className="rounded-lg"
              />
              <div className="flex-grow">
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  Portfolio Website (Tailwind CSS, JavaScript, React)
                </h1>
              </div>
            </div>
          </a>

          {filteredRepos?.map((repo) => (
            <a href={repo.homepage || repo.html_url}>
              <div
                key={repo.id}
                className={`ui-ux-design w-80 flex flex-col gap-3 p-5 rounded-lg ${
                  bgcolor === "white"
                    ? "bg-[#EEF5FA]"
                    : "bg-black border border-[#A6A6A6]"
                } h-full shadow-lg`}
              >
                <img
                  src={github}
                  alt="Portfolio Website"
                  className="rounded-lg"
                />
                <h1
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {repo.name}
                </h1>
                <p
                  className={`text-md font-bold ${
                    bgcolor === "white" ? "text-black" : "text-white"
                  }`}
                >
                  {repo.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        {/* More Projects Button */}
        <div className="text-center my-5">
          <button
            onClick={fetchRepos}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            {loading ? "Loading..." : "More Projects"}
          </button>
        </div>

        {/* Github Button */}
        <div className="text-center my-5 ml-6">
          <button
            onClick={() => navigate("/github")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
          >
            {loading ? "Loading..." : "Go To GitHub"}
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Projects;
