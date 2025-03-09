import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const RepoDetails = ({ bgcolor, darkmode }) => {
  const { repoName } = useParams();
  const [repoData, setRepoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get(
          `https://github-api-74xd.onrender.com/github/${repoName}`
        );
        setRepoData(response.data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
      setLoading(false);
    };

    fetchRepoData();
  }, [repoName]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div
      className={`p-6 rounded-lg ${
        darkmode === "dark" ? `bg-${bgcolor} text-white` : "bg-white text-black"
      }`}
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/github")}
        className="text-blue-400 hover:underline"
      >
        ← Back
      </button>

      {/* Repository Info */}
      <h1 className="text-2xl font-bold mt-4">{repoData.name}</h1>
      <p className="text-lg mt-2">{repoData.description}</p>
      <p className="mt-2">
        ⭐ <span className="font-semibold">{repoData.stars}</span> | 🍴{" "}
        <span className="font-semibold">{repoData.forks}</span>
      </p>

      <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={() =>
          (window.location.href = `https://github.com/Avanishdev/${repoName}`)
        }
      >
        Go To Repo
      </button>
      {/* Create Issue Button */}
      {/* <button
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        onClick={() => navigate(`/github/${repoName}/issues`)}
      >
        Create Issue
      </button> */}
    </div>
  );
};

export default RepoDetails;
