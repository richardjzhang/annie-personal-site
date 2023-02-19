import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
import { getAllCaseStudies } from "@/utils/contentful";
import { CaseStudy } from "@/types/contentful-types";

interface Props {
  caseStudies: Array<CaseStudy>;
}

export async function getStaticProps() {
  const caseStudies = await getAllCaseStudies();
  return {
    props: {
      caseStudies,
    },
  };
}

export default function Home(props: Props) {
  console.log({ props });
  return (
    <>
      <Head>
        <title>Portfolio - Annie Tran UX/UI Design portfolio</title>
        <meta
          name="description"
          content="Hi - I'm Annie! A UX/UI designer based in Sydney, Australia, working across the end-to-end UX/UI design process for iOS/Android apps and websites. I am customer obsessed and passionate about designing friendly, frictionless and fantastic user experiences!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="px-5 mx-auto max-w-4xl w-full flex flex-col-reverse items-center justify-center sm:flex-row">
          <div className="mt-10 mr-0 max-w-xl sm:mt-0 mr-16">
            <div className="text-center text-sm text-slate-500 space-y-4 sm:text-left">
              <p>
                Welcome to my UX/UI Design portfolio. As a UX/UI designer, I
                solve customer problems and design digital interfaces for iOS
                and Android apps, websites, and interactive digital way finding
                kiosks for the built environment – think digital touch screens
                at light rail stops and train stations.
              </p>
              <p>
                I ground my work on the double diamond Design Thinking process
                and believe that great design comes from understanding users
                through research and empathy early on. User empathy must also be
                paired with an understanding of business problems and
                aspirations to truly design a digital solution that enhances
                customer experiences and helps businesses reach strategic goals.
              </p>
            </div>
            <div className="mt-5 flex items-center justify-center space-x-2 sm:justify-start">
              <SocialIcon url="https://www.linkedin.com/in/annietran94/" />
              <SocialIcon url="https://www.instagram.com/tin_plants/" />
              <SocialIcon url="https://dribbble.com/AnnieUXDesigner" />
            </div>
          </div>
          <Image
            alt="Profile Picture"
            src="/profile-pic.jpeg"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="mt-24 px-5">
          {props.caseStudies.map((caseStudy) => (
            <div
              key={caseStudy.sys.id}
              className="shadow shadow-slate-300 rounded overflow-hidden w-fit flex flex-col items-center text-center"
            >
              <Image
                alt={caseStudy.title}
                src={caseStudy.thumbnail.url}
                width={450}
                height={450}
              />
              <div className="p-4">
                <p className="mt text-2xl font-semibold">{caseStudy.title}</p>
                <p className="mt-2">{caseStudy.summary}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 flex flex-col sm:flex-row sm:h-96">
          <div className="h-96 py-20 px-2 bg-sharpie bg-center bg-no-repeat bg-cover w-full flex items-end justify-center sm:w-6/12 sm:h-full">
            <p className="text-white text-4xl text-center font-bold">
              Let's create better user experiences together!
            </p>
          </div>
          <div className="w-full h-96 bg-slate-200 flex flex-col items-center justify-center sm:w-6/12 sm:h-full">
            <p className="text-center text-3xl text-slate-700 font-bold">
              Want to learn more about my work or discuss new opportunities?
            </p>
            <button className="mt-8 w-40 py-2 rounded bg-sky-400 text-sm text-white uppercase font-semibold">
              <Link href="mailto:annieablue@hotmail.com?subject=Annie%20Tran%20-%20Contact%20Me">
                Contact me
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
