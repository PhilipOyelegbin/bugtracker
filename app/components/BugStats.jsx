"use client";
import { useEffect, useState } from "react";
import { FaBug } from "react-icons/fa";
import { Skeleton } from "../(public_pages)/bugs/components/Skeleton";

export const BugStats = () => {
  const [loading, setLoading] = useState(true);
  const [bugData, setBugData] = useState();
  const [error, setError] = useState();

  const opendedBug = bugData?.filter((bug) => bug.status === "Open").length;
  const progressBug = bugData?.filter(
    (bug) => bug.status === "Inprogress"
  ).length;
  const resolvedBug = bugData?.filter(
    (bug) => bug.status === "Resolved"
  ).length;

  useEffect(() => {
    fetch(`/api/bugs`)
      .then((resp) => resp.json())
      .then((data) => setBugData(data.result))
      .catch((err) => setError("Unexpected error occured, try again later!"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className='mt-10'>
      <h2>Bug Statistics</h2>
      {error && <p className='text-center text-red-500'>{error}</p>}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-white mt-10'>
        {loading
          ? Array(4)
              .fill(0)
              .map((d, index) => <Skeleton key={index} />)
          : bugData && (
              <>
                <div className='bug-container bg-blue-500'>
                  <div className='bug-item'>
                    <span className='flex items-center gap-2'>
                      {bugData.length} <FaBug />
                    </span>
                    <span>Total</span>
                  </div>
                </div>
                <div className='bug-container bg-red-500'>
                  <div className='bug-item'>
                    <span className='flex items-center gap-2'>
                      {opendedBug} <FaBug />
                    </span>
                    <span>Opened</span>
                  </div>
                </div>
                <div className='bug-container bg-orange-500'>
                  <div className='bug-item'>
                    <span className='flex items-center gap-2'>
                      {progressBug} <FaBug />
                    </span>
                    <span>Inprogress</span>
                  </div>
                </div>
                <div className='bug-container bg-lime-500'>
                  <div className='bug-item'>
                    <span className='flex items-center gap-2'>
                      {resolvedBug} <FaBug />
                    </span>
                    <span>Resolved</span>
                  </div>
                </div>
              </>
            )}
      </div>
    </section>
  );
};
