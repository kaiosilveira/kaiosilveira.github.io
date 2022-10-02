import SocialLinksSection from '../social-links';
import avatarImg from '../../assets/avatar.jpg';
import Avatar from '../../components/avatar';
import JustifiedParagraph from '../../components/justified-text';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import * as S from './styles';
import LabeledIcon from '../../components/labeled-icon';

const MainSection = () => (
  <S.Main>
    <Avatar imgSrc={avatarImg} />
    <h1>Kaio Silveira</h1>
    <JustifiedParagraph>
      Father &amp; husband, software engineer, restless student. Loves to solve difficult problems
      and to talk about philosophical stuff with his 5yo boy.
    </JustifiedParagraph>
    <LabeledIcon icon={faMapMarker} label="Lisbon, Portugal" />
    <SocialLinksSection />
  </S.Main>
);

export default MainSection;
