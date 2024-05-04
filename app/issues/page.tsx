import Link from "next/link"

function IssuesPage() {
  return (
    <article>
      <Link className="btn" href="/issues/new">
        New Issue
      </Link>
    </article>
  )
}

export default IssuesPage