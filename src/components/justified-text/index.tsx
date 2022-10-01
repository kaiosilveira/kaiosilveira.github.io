import { ReactNode } from 'react';
import * as S from './styles';

const JustifiedParagraph = ({ children }: { children: ReactNode }) => (
  <S.JustifiedParagraph aria-label={children?.toString()}>{children}</S.JustifiedParagraph>
);

export default JustifiedParagraph;
