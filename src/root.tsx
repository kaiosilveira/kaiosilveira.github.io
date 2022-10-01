import SocialLinks from './components/social-links';
import * as S from './styles';

const Root = () => {
  return (
    <S.Root>
      <h1>Kaio Silveira</h1>
      <S.Subtitle style={{ textAlign: 'justify' }}>
        Father &amp; husband, software engineer, restless student. Loves to solve difficult problems
        and to talk about philosophical stuff with his 5yo boy.
      </S.Subtitle>
      <SocialLinks />
    </S.Root>
  );
};

export default Root;
