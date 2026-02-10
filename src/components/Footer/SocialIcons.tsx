import {
  Facebook,
  Instagram,
  X,
  Linkedin,
  Youtube,
} from "iconoir-react";

const socials = [
  {
    id: 1,
    icon: Facebook,
    link: "https://facebook.com",
  },
  {
    id: 2,
    icon: Instagram,
    link: "https://instagram.com",
  },
  {
    id: 3,
    icon: X,
    link: "https://x.com",
  },
  {
    id: 4,
    icon: Linkedin,
    link: "https://linkedin.com",
  },
  {
    id: 5,
    icon: Youtube,
    link: "https://youtube.com",
  },
];

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-1">
      {socials.map(({ id, icon: Icon, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-primary_blue flex items-center justify-center 
                     hover:bg-primary_heading transition-all"
        >
          <Icon className="text-white w-4 h-4" strokeWidth={2} />
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
