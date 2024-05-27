"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BugCard } from "./(components)/BugCard";
import { Skeleton } from "./(components)/Skeleton";

const BugPage = () => {
  const [loading, setLoading] = useState(true);
  const [bugs, setBugs] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`/api/bugs`)
      .then((resp) => resp.json())
      .then((data) => setBugs(data.result))
      .catch((err) => setError("Unexpected error occurred, try again later!"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <article>
      <Link className='btn' href='/bugs/new'>
        New Bug
      </Link>
      <div className='mt-10 flex flex-wrap justify-center gap-5'>
        {error && <p className='text-red-500'>{error}</p>}
        {loading
          ? Array(7)
              .fill(0)
              .map((d, index) => <Skeleton key={index} />)
          : bugs &&
            bugs.map((bug) => (
              <BugCard
                key={bug.id}
                id={bug.id}
                title={bug.title}
                description={bug.description}
                priority={bug.priority}
                status={bug.status}
                updated={bug.updatedAt}
              />
            ))}
      </div>
    </article>
  );
};

export default BugPage;
