import * as S from './styles';
import MainSection from './sections/main';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import WhoAmISection from './sections/who-am-i';

const Root = () => {
  return (
    <S.Root>
      <MainSection />
      <WhoAmISection />
      <CodingAroundTheWorldSection />
    </S.Root>
  );
};

export default Root;
