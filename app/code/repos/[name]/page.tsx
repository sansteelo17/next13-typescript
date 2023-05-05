import { Suspense } from "react";
import RepoDirs from "@/app/components/RepoDirs";
import RepoItem from "@/app/components/RepoItem";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Link from "next/link";

type Props = {
  params: Params;
};

const RepoPage = ({ params }: Props) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoItem name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
