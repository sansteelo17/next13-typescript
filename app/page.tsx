import Link from "next/link";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <h1>Welcome to Steelo World</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
