import { ContentHeader } from "@/components/ContentHeader";
import { getProjectsBySlug, getProjects } from "@/utils";

export function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const project = await getProjectsBySlug(params.slug);

  return (
    <div className="w-2/3 m-auto">
      <ContentHeader
        title={project.title}
        description={project.description}
        authorImage={project.employeeImage}
        date={project.date}
        author={project.author}
        highlights={project.highlights}
      />
      <article className="prose lg:prose-lg markdown-image-50">
        <div dangerouslySetInnerHTML={{ __html: project.content }}></div>
      </article>
      <div className="flex justify-start">
        {project.documentDownload && (
          <a
            href={project.documentDownload}
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Check it out on GitHub!
          </a>
        )}
      </div>
    </div>
  );
}
