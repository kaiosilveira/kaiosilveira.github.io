import avatarImg from './assets/avatar.jpg';
import * as S from './styles';
import SocialLinksSection from './sections/social-links';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import JustifiedParagraph from './components/justified-text';
import Avatar from './components/avatar';

const Root = () => {
  return (
    <S.Root>
      <Avatar imgSrc={avatarImg} />
      <h1>Kaio Silveira</h1>
      <JustifiedParagraph>
        Father &amp; husband, software engineer, restless student. Loves to solve difficult problems
        and to talk about philosophical stuff with his 5yo boy.
      </JustifiedParagraph>
      <SocialLinksSection />
      <CodingAroundTheWorldSection />
    </S.Root>
  );
};

export default Root;
