import { BugStats } from "./components/BugStats";
import { Profile } from "./components/Profile";
import { RecentBugs } from "./components/RecentBugs";

export default function Home() {
  return (
    <article>
      <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
        <Profile/>
        <RecentBugs/>
      </div>
      <BugStats/>
    </article>
  );
}
