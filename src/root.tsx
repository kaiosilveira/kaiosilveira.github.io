import SocialLinksSection from './sections/social-links';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import * as S from './styles';
import JustifiedParagraph from './components/justified-text';

const Root = () => {
  return (
    <S.Root>
      <h1>Kaio Silveira</h1>
      <JustifiedParagraph
        text="Father &amp; husband, software engineer, restless student. Loves to solve difficult problems
        and to talk about philosophical stuff with his 5yo boy."
      />
      <SocialLinksSection />
      <CodingAroundTheWorldSection />
    </S.Root>
  );
};

export default Root;
