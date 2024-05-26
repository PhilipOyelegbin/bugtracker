"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBug } from "react-icons/fa";

export const Navbar = () => {
  const links = [
    { navlink: "/", label: "Dashboard" },
    { navlink: "/issues", label: "Issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className='flex space-x-5 items-center px-5 h-16 border-b-2 lg:px-20'>
      <h2 className='flex gap-1 items-center text-purple-900 font-bold'>
        <FaBug />
        BugTracker
      </h2>
      <ul className='flex space-x-5'>
        {links.map((link) => (
          <Link
            className={`${
              link.navlink === currentPath ? "text-slate-500" : "text-slate-700"
            } hover:text-slate-600 ease-in-out duration-300`}
            key={link.navlink}
            href={link.navlink}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
