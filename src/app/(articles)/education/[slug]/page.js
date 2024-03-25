import { ContentHeader } from "@/components/ContentHeader";
import { getEducationBySlug, getEducations } from "@/utils";

export function generateStaticParams() {
  const education = getEducations();

  return education.map((education) => ({
    slug: education.slug,
  }));
}

export default async function EducationDetail({ params }) {
  const education = await getEducationBySlug(params.slug);

  return (
    <div className="w-2/3 m-auto">
      <ContentHeader
        title={education.title}
        description={education.description}
        authorImage={education.employeeImage}
        date={education.date}
        author={education.employee}
        highlights={education.highlights}
      />
      <article className="prose lg:prose-lg markdown-image-50">
        <div dangerouslySetInnerHTML={{ __html: education.content }}></div>
      </article>
      <div className="flex justify-start">
        {education.documentDownload && (
          <a
            href={education.documentDownload}
            className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Certificates
          </a>
        )}
      </div>
    </div>
  );
}
