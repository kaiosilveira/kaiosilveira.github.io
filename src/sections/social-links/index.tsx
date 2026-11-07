import { faGithub, faLinkedin, faMedium, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialIconLink from '../../components/social-icon';

const SocialLinksSection = () => (
  <section>
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
    <SocialIconLink
      href="https://twitter.com/kaio_dev"
      icon={faTwitter}
      ariaLabel="link to X (Twitter) profile"
    />
  </section>
);

export default SocialLinksSection;
