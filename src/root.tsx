import * as S from './styles';
import Main from './sections/main';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import WhoAmISection from './sections/who-am-i';
import Footer from './sections/footer';
import PreferredTechStackSession from './sections/preferred-tech-stack';

const Root = () => {
  return (
    <S.Root>
      <Main />
      <WhoAmISection />
      <PreferredTechStackSession />
      <CodingAroundTheWorldSection />
      <Footer />
    </S.Root>
  );
};

export default Root;
