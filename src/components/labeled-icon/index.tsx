import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as S from './styles';

const LabeledIcon = ({ label, icon }: { label: string; icon: IconProp }) => (
  <S.LabeledIcon aria-label="icon">
    <S.StyledIcon icon={icon} />
    <span>{label}</span>
  </S.LabeledIcon>
);

export default LabeledIcon;
