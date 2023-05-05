import Link from "next/link";

const fetchRepoContents = async (name: string): Promise<JSON> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response: Response = await fetch(
    `https://api.github.com/repos/sansteelo17/${name}/contents`
  );

  const repo: JSON = await response.json();

  return repo;
};

type Props = {
  name: string;
};

const RepoDirs = async ({ name }: Props) => {
  const response: JSON = await fetchRepoContents(name);

  const data = await JSON.parse(JSON.stringify(response));

  const dirs = data.filter((content: any) => content.type === "dir");

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
