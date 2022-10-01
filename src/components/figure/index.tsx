import * as S from './styles';

export type FigureProps = { imgSrc: string; alt: string; caption: string };

const Figure = ({ imgSrc, alt, caption }: FigureProps) => (
  <S.FigureWrapper>
    <S.Image src={imgSrc} width="300px" height="400px" alt={alt} />
    <S.FigCaption>{caption}</S.FigCaption>
  </S.FigureWrapper>
);

export default Figure;
