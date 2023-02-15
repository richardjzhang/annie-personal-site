import Image from "next/image";
import CustomLink from "@/components/Link";

export default function Header() {
  return (
    <div className="px-5 mx-auto max-w-4xl py-5 flex items-center justify-between">
      <Image alt="Logo" src="/logo.jpeg" width={50} height={50} />
      <div className="flex space-x-5">
        <CustomLink href="/">Portfolio</CustomLink>
        {/* <CustomLink href="/about">About Me</CustomLink> */}
        <CustomLink href="mailto:annieablue@hotmail.com?subject=Annie%20Tran%20-%20Contact%20Me">
          Contact Me
        </CustomLink>
      </div>
    </div>
  );
}
