import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

// Todo: Convert to Typescript
export default function Markdown({ children }) {
  return (
    // <div className="prose max-w-none mt-10">
    <ReactMarkdown
      className="markdown"
      components={{
        a: (props) => {
          const { href, node, children } = props;
          if (node.children[0].tagName === "img") {
            const image = node.children[0];
            const metastring = image.properties.alt;
            const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
            const src = `${image.properties.src}`;
            return (
              <Link
                className="block my-10 h-60 relative text-slate-500 sm:h-96"
                href={href}
                target="_blank"
              >
                <Image
                  className="object-contain mx-auto"
                  src={src}
                  alt={alt}
                  fill
                />
              </Link>
            );
          }
          return (
            <Link href={href} target="_blank">
              {children}
            </Link>
          );
        },
        p: (props) => {
          const { node, children } = props;
          if (node.children[0].tagName === "img") {
            const image = node.children[0];
            const metastring = image.properties.alt;
            const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
            const src = `https:${image.properties.src}`;
            return (
              <p className="h-60 my-10 relative text-slate-500 sm:h-96">
                <Image
                  className="object-contain mx-auto"
                  src={src}
                  alt={alt}
                  fill
                />
              </p>
            );
          }
          return <p className="text-slate-500 my-3">{children}</p>;
        },
        hr: () => (
          <div className="w-full flex space-x-4 justify-center text-4xl text-gray-400">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        ),
        h2: ({ children }) => (
          <h2 className="mt-10 mb-2 text-sky-500 font-semibold text-xl first:mt-0">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-slate-500 font-semibold">{children}</h3>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
    // </div>
  );
}
