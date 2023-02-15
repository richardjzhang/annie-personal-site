import { SocialIcon as Icon } from "react-social-icons";

interface Props {
  url: string;
}

export default function SocialIcon({ url }: Props) {
  return (
    <Icon
      bgColor="rgb(34,34,34)"
      fgColor="white"
      url={url}
      target="_blank"
      style={{ height: 40, width: 40 }}
    />
  );
}
