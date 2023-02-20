import Image from "next/image";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/utils/contentful";
import { CaseStudy } from "@/types/contentful-types";
import Markdown from "@/components/Markdown";

interface Params {
  params: {
    slug: string;
  };
}

interface Props {
  caseStudy: CaseStudy;
}

export async function getStaticPaths() {
  const caseStudies = await getAllCaseStudies();
  return {
    paths: caseStudies.map((caseStudy: CaseStudy) => ({
      params: { slug: caseStudy.slug },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }: Params) {
  const { slug } = params;
  try {
    const caseStudy = await getCaseStudyBySlug(slug);
    return {
      props: {
        caseStudy,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

const SummaryTitle = ({
  children,
  type = "light",
}: {
  children: string;
  type?: "light" | "dark";
}) => {
  const color = type === "light" ? "text-sky-500" : "text-slate-800";
  return <h3 className={`${color} text-lg font-semibold`}>{children}</h3>;
};

const SummaryText = ({ children }: { children: string }) => (
  <p className="mt text-slate-500">{children}</p>
);

export default function CaseStudyPage(props: Props) {
  const { caseStudy } = props;
  return (
    <div className="w-full flex flex-col items-center">
      <Image
        alt="Cover Photo"
        src={caseStudy.coverPhoto?.url}
        width={450}
        height={290}
      />
      <div className="px-5 mx-auto max-w-4xl mt-16 grid gap-6 grid-cols-1 sm:grid-cols-3">
        <div className="space-y-6">
          <div>
            <SummaryTitle type="dark">My Role</SummaryTitle>
            <SummaryText>{caseStudy.role}</SummaryText>
          </div>
          <div>
            <SummaryTitle type="dark">Duration</SummaryTitle>
            <SummaryText>{caseStudy.duration}</SummaryText>
          </div>
          <div>
            <SummaryTitle type="dark">Tools</SummaryTitle>
            <SummaryText>{caseStudy.tools}</SummaryText>
          </div>
        </div>
        <div>
          <SummaryTitle>Overview</SummaryTitle>
          <SummaryText>{caseStudy.overview}</SummaryText>
        </div>
        <div className="space-y-6">
          {caseStudy.background && (
            <div>
              <SummaryTitle>Background</SummaryTitle>
              <SummaryText>{caseStudy.background}</SummaryText>
            </div>
          )}
          {caseStudy.problem && (
            <div>
              <SummaryTitle>Problem</SummaryTitle>
              <SummaryText>{caseStudy.problem}</SummaryText>
            </div>
          )}
          {caseStudy.solution && (
            <div>
              <SummaryTitle>Solution</SummaryTitle>
              <SummaryText>{caseStudy.solution}</SummaryText>
            </div>
          )}
        </div>
      </div>
      <div className="my-10 w-full h-10 bg-sky-200"></div>
      <div className="px-5 mx-auto max-w-4xl pb-20">
        <Markdown>{caseStudy.content}</Markdown>
      </div>
    </div>
  );
}
