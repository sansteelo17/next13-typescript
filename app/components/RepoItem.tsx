import { Repo } from "@/interfaces/interface";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepo = async (name: string): Promise<JSON> => {
  const response: Response = await fetch(
    `https://api.github.com/repos/sansteelo17/${name}`
  );

  const repo: JSON = await response.json();

  return repo;
};

type Props = {
  name: string;
};

const RepoItem = async ({ name }: Props) => {
  const repo: JSON = await fetchRepo(name);

  const data: Repo = await JSON.parse(JSON.stringify(repo));
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{data.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{data.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{data.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default RepoItem;
