import { SocialIcon as Icon } from "react-social-icons";

interface Props {
  url: string;
}

export default function SocialIcon({ url }: Props) {
  const bgColor = "rgb(34, 34, 34)";
  const fgColor = "white";
  return (
    <Icon
      bgColor={bgColor}
      fgColor={fgColor}
      url={url}
      target="_blank"
      style={{ height: 40, width: 40 }}
    />
  );
}
