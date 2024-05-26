import Link from "next/link";

const IssuePage = () => {
  return (
    <article>
      <Link className='btn' href='/issues/new'>
        New Issue
      </Link>
    </article>
  );
};

export default IssuePage;
