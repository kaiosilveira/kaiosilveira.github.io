import * as S from './styles';
import Main from './sections/main';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import WhoAmISection from './sections/who-am-i';
import Footer from './sections/footer';

const Root = () => {
  return (
    <S.Root>
      <Main />
      <WhoAmISection />
      <CodingAroundTheWorldSection />
      <Footer />
    </S.Root>
  );
};

export default Root;
