import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { EducationList } from "@/components/education/EducationList";
import { ProjectList } from "@/components/projects/ProjectsList";
import { getContentCount } from "@/utils";

export default async function Home() {
  const count = getContentCount();

  return (
    <>
      <Hero count={count} />
      <SectionTitle title={"Experience"} href={"/experience"} />
      <ExperienceList />
      <SectionTitle title={"Education"} href={"/education"} />
      <EducationList />
      <SectionTitle title={"Projects"} href={"/projects"} />
      <ProjectList />
    </>
  );
}
