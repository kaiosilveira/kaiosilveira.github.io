import * as S from './styles';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';
import MainSection from './sections/main';

const Root = () => {
  return (
    <S.Root>
      <MainSection />
      <CodingAroundTheWorldSection />
    </S.Root>
  );
};

export default Root;
