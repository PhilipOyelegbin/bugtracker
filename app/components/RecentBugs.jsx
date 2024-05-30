"use client";
import { useEffect, useState } from "react";
import { Skeleton } from "../(public_pages)/bugs/components/Skeleton";

export const RecentBugs = () => {
  const [loading, setLoading] = useState(true);
  const [bugData, setBugData] = useState();
  const [error, setError] = useState();

  const opendedBug = bugData
    ?.filter((bug) => bug.status === "Open")
    .sort((bug1, bug2) => bug2.id - bug1.id);

  console.log(opendedBug);

  useEffect(() => {
    fetch(`/api/bugs`)
      .then((resp) => resp.json())
      .then((data) => setBugData(data.result))
      .catch((err) => setError("Unexpected error occured, try again later!"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <section>
      <h2>Recenly Opened Bugs</h2>
      {error && <p className='text-center text-red-500'>{error}</p>}
      <div className='text-white mt-3'>
        {loading ? (
          <Skeleton />
        ) : (
          bugData && (
            <table className='border-collapse w-full'>
              <thead>
                <tr>
                  <th className='bg-slate-700 text-white border p-2 text-left'>
                    Title
                  </th>
                  <th className='bg-slate-700 text-white border p-2 text-left'>
                    Description
                  </th>
                  <th className='bg-slate-700 text-white border p-2 text-left'>
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className='text-slate-700'>
                {opendedBug &&
                  opendedBug.map((bug) => (
                    <tr key={bug.id}>
                      <td className='bg-slate-700 text-white border p-2 text-left'>
                        {bug.title}
                      </td>
                      <td className='bg-slate-700 text-white border p-2 text-left'>
                        {bug.description}
                      </td>
                      <td className='bg-slate-700 text-white border p-2 text-left'>
                        {bug.priority}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </section>
  );
};
