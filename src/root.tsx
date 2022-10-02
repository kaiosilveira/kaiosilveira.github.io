import * as S from './styles';
import MainSection from './sections/main';
import CodingAroundTheWorldSection from './sections/coding-round-the-world';

const Root = () => {
  return (
    <S.Root>
      <MainSection />
      <CodingAroundTheWorldSection />
    </S.Root>
  );
};

export default Root;
