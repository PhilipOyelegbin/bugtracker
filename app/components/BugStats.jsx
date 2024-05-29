import { FaBug } from "react-icons/fa";

export const BugStats = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-5 text-white mt-10'>
      <div className='bug-container bg-red-500'>
        <div className='bug-item'>
          <span className='flex items-center gap-2'>
            30 <FaBug />
          </span>
          <span>Opened</span>
        </div>
      </div>
      <div className='bug-container bg-orange-500'>
        <div className='bug-item'>
          <span className='flex items-center gap-2'>
            5 <FaBug />
          </span>
          <span>Inprogress</span>
        </div>
      </div>
      <div className='bug-container bg-lime-500'>
        <div className='bug-item'>
          <span className='flex items-center gap-2'>
            10 <FaBug />
          </span>
          <span>Resolved</span>
        </div>
      </div>
    </section>
  );
};
