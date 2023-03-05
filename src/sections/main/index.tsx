import * as S from './styles';
import LabeledIcons from './labeled-icons';
import SocialLinksSection from '../social-links';
import avatarImg from '../../assets/memoji.jpg';
import Avatar from '../../components/avatar';
import JustifiedParagraph from '../../components/justified-text';

const Main = () => (
  <S.Main>
    <Avatar imgSrc={avatarImg} />
    <h1>Kaio Silveira</h1>
    <JustifiedParagraph>
      Father &amp; husband, software engineer, restless student. Loves to solve difficult problems
      and to talk about philosophical stuff with his 5yo boy.
    </JustifiedParagraph>
    <LabeledIcons />
    <SocialLinksSection />
  </S.Main>
);

export default Main;
