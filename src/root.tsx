import * as S from './styles';
import Main from './sections/main';
import WhoAmISection from './sections/who-am-i';
import Footer from './sections/footer';

const Root = () => {
  return (
    <S.Root>
      <Main />
      <WhoAmISection />
      <Footer />
    </S.Root>
  );
};

export default Root;
