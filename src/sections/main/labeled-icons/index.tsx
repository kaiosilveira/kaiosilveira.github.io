import * as S from './styles';
import { faBirthdayCake, faFlag, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import LabeledIcon from '../../../components/labeled-icon';

const LabeledIcons = () => (
  <S.LabeledIcons>
    <LabeledIcon icon={faBirthdayCake} label="Jan 1996" />
    <LabeledIcon icon={faFlag} label="Brazilian" />
    <LabeledIcon icon={faMapMarker} label="Lisbon, Portugal" />
  </S.LabeledIcons>
);

export default LabeledIcons;
