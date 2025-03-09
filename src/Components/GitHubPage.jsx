import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GitHubPage = ({ bgcolor, darkmode }) => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await axios.get(
          "https://github-api-74xd.onrender.com/github"
        );
        setUserData(response.data);
        setRepos(response.data.repositories);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
      setLoading(false);
    };

    fetchGitHubData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div
        className={`p-6 rounded-lg ${
          darkmode === "dark"
            ? `bg-${bgcolor} text-white`
            : "bg-white text-black"
        }`}
      >
        <h1 className="text-2xl font-bold">GitHub Profile</h1>
        {userData && (
          <div>
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Public Repositories: {userData.publicRepos}</p>
          </div>
        )}

        <h2 className="mt-4 text-xl font-semibold">Repositories</h2>
        <ul>
          {repos?.map((repo) => (
            <li
              key={repo.name}
              className="cursor-pointer text-blue-400 hover:text-blue-300 underline"
              onClick={() => navigate(`/github/${repo.name}`)}
            >
              {repo.name} ⭐ {repo.stars}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GitHubPage;
