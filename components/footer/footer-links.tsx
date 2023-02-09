import { Instagram, Discord, Github } from '@icons-pack/react-simple-icons'

const FooterLinks = () => (
  <div className="flex flex-row justify-center gap-x-8">
    <a
      href="https://github.com/purduehackers"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Github height={32} width={32} />
    </a>
    <a
      href="https://instagram.com/purduehackers"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Instagram height={32} width={32} />
    </a>
    <a
      href="https://puhack.horse/discord"
      className="transition hover:text-gray-600"
      target="_blank"
      rel="noreferrer"
    >
      <Discord height={32} width={32} />
    </a>
  </div>
)

export default FooterLinks