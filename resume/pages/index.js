import HeroComponent from "../components/hero";
import LinksComponent from "../components/links";
import SkillsComponent from "../components/skills";
import StackComponent from "../components/stack";
import WorkComponent from "../components/work";
import ProjectsComponent from "../components/projects";

export default function Home() {
  return (
    <div>
      <div id="container--main">
        <HeroComponent />
        <LinksComponent />
        <SkillsComponent />
        <StackComponent />
        <WorkComponent />
        <ProjectsComponent />
      </div>
    </div>
  );
}
