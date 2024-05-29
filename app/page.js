import { BugStats } from "./components/BugStats";
import { Profile } from "./components/Profile";

export default function Home() {
  return (
    <article>
      <Profile/>
      <BugStats/>
    </article>
  );
}
