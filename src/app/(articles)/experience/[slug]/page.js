import { ContentHeader } from "@/components/ContentHeader";
import { getExperienceBySlug, getExperiences } from "@/utils";

export function generateStaticParams() {
  const experiences = getExperiences();

  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}

export default async function ExperienceDetail({ params }) {
  const experience = await getExperienceBySlug(params.slug);

  return (
    <div className="w-2/3 m-auto">
      <ContentHeader
        title={experience.title}
        description={experience.description}
        authorImage={experience.employeeImage}
        date={experience.date}
        author={experience.author}
        highlights={experience.highlights}
      />
      <article className="prose lg:prose-lg markdown-image-50">
        <div dangerouslySetInnerHTML={{ __html: experience.content }}></div>
      </article>
      <div className="flex justify-start">
        {experience.documentDownload && (
          <a
            href={experience.documentDownload}
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download References
          </a>
        )}
      </div>
    </div>
  );
}
