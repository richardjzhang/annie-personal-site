import Image from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/SocialIcon";
export { mailTo } from "@/utils/urls";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#222222" }}>
      <div className="px-5 mx-auto max-w-4xl py-10 flex items-center">
        <Image alt="Logo" src="/logo-dark.png" width={60} height={60} />
        <div className="ml-5 text-slate-400">
          <Link href="/" className="mr-4">
            Portfolio
          </Link>
          <Link href="mailto:annieablue@hotmail.com?subject=Annie%20Tran%20-%20Contact%20Me">
            Contact me
          </Link>
        </div>
        <div className="ml-auto">
          <p className="text-sm text-slate-400">
            © 2023 Annie Tran – All Rights Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
