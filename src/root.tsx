import { faGithub } from '@fortawesome/free-brands-svg-icons';
import SocialIconLink from './components/social-icon';
import * as S from './styles';

const Root = () => {
  return (
    <S.Root>
      <h1>Kaio Silveira</h1>
      <SocialIconLink
        href="https://github.com/kaiosilveira"
        icon={faGithub}
        ariaLabel="link to github profile"
      />
    </S.Root>
  );
};

export default Root;
