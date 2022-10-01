import parisPic from '../../assets/paris.jpg';
import romePic from '../../assets/rome.jpg';
import JustifiedParagraph from '../../components/justified-text';
import Figure from '../../components/figure';
import * as S from './styles';

const CodingAroundTheWorldSection = () => {
  return (
    <S.CodingAroundTheWorld>
      <h2>Coding around the world 🌍</h2>
      <JustifiedParagraph>
        Recently I've started a funny project based on taking pictures in front of well-known places
        around the world. Below there are my initial pictures of this new adventure.
      </JustifiedParagraph>
      <S.PictureGallery>
        <Figure
          imgSrc={parisPic}
          alt="Computer in front of the Eiffel Tower"
          caption="Paris, France 🇫🇷"
        />
        <Figure imgSrc={romePic} alt="Computer in front of the Coliseum" caption="Roma, Italy 🇮🇹" />
      </S.PictureGallery>
    </S.CodingAroundTheWorld>
  );
};

export default CodingAroundTheWorldSection;
