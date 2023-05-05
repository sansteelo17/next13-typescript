import { Repo } from "@/interfaces/interface";
import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async (): Promise<JSON> => {
  const response: Response = await fetch(
    "https://api.github.com/users/sansteelo17/repos"
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));

  const repos: JSON = await response.json();

  return repos;
};

type Props = {};

const ReposPage = async (props: Props) => {
  const repos: JSON = await fetchRepos();

  const data: Repo[] = await JSON.parse(JSON.stringify(repos));

  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {data.map((repo: Repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-detail">
                <span>
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
