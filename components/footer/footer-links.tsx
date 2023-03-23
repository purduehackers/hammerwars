import {
  Siinstagram,
  Sidiscord,
  Sigithub,
} from "@icons-pack/react-simple-icons";

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://github.com/purduehackers"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Sigithub height={32} width={32} />
    </a>
    <a
      href="https://instagram.com/purduehackers"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Siinstagram height={32} width={32} />
    </a>
    <a
      href="https://puhack.horse/discord"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Sidiscord height={32} width={32} />
    </a>
  </div>
);

export default FooterLinks;
