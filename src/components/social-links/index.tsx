import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import SocialIconLink from '../social-icon';

const SocialLinks = () => (
  <footer>
    <SocialIconLink
      href="https://github.com/kaiosilveira"
      icon={faGithub}
      ariaLabel="link to GitHub profile"
    />
    <SocialIconLink
      href="https://www.linkedin.com/in/kaio-silveira/"
      icon={faLinkedin}
      ariaLabel="link to LinkedIn profile"
    />
    <SocialIconLink
      href="https://medium.com/@kaiosilveira"
      icon={faMedium}
      ariaLabel="link to Medium blog"
    />
  </footer>
);

export default SocialLinks;
