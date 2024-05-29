import Link from "next/link";

export const BugCard = ({
  id,
  title,
  description,
  priority,
  status,
  updated,
}) => {
  const date = new Date(updated).toUTCString();

  const statusStyle = () => {
    switch (status) {
      case "Open":
        return "bg-red-500";
      case "In Progress":
        return "bg-yellow-500";
      case "Resolved":
        return "bg-lime-500";
      default:
        return "bg-gray-500";
    }
  };

  const priorityStyle = () => {
    switch (priority) {
      case "Low":
        return "text-lime-500";
      case "Medium":
        return "text-yellow-500";
      case "High":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Link
      href={`/bugs/${id}`}
      className='bg-slate-200 shadow-md p-3 rounded-md w-72 max-w-[500px] hover:skew-x-6 ease-in-out duration-300'
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <div className='flex items-center justify-between text-xs my-2'>
        <p className={`${priorityStyle(priority)} text-sm font-normal p-2`}>
          {priority}
        </p>
        <span className={`${statusStyle(status)} text-white rounded-md p-2`}>
          {status}
        </span>
      </div>
      <p>{date}</p>
    </Link>
  );
};
