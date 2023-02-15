import Link from "next/link";
import { useRouter } from "next/router";

export default function CustomLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Link
      className={`px-4 py-2 rounded uppercase text-sm font-bold ${
        currentPath === href
          ? "text-sky-400"
          : "text-black hover:bg-sky-400 hover:text-white"
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
