import Image from "next/image";
import SocialIcon from "@/components/SocialIcon";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#222222" }}>
      <div className="px-5 mx-auto max-w-4xl py-10">
        <div className="flex flex-col items-center">
          <Image alt="Logo" src="/logo-dark.png" width={75} height={75} />
          <div className="mt-5 -mx-2.5 flex items-center">
            <SocialIcon url="https://www.linkedin.com/in/annietran94/" />
            <SocialIcon url="https://www.instagram.com/tin_plants/" />
            <SocialIcon url="https://dribbble.com/AnnieUXDesigner" />
          </div>
        </div>
      </div>
    </div>
  );
}
