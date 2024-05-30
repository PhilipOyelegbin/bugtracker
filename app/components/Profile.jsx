import { FaPen } from "react-icons/fa";

export const Profile = () => {
  return (
    <section className='flex justify-between gap-20 items-start'>
      <div className='flex flex-col gap-2'>
        <h2>Welcome Full name</h2>
        <p>Full name:</p>
        <p>Email:</p>
        <p>Phone number:</p>
        <p>Role:</p>
      </div>
      <FaPen className='cursor-pointer text-2xl text-blue-500' />
    </section>
  );
};
