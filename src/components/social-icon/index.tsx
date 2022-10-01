import { IconProp } from '@fortawesome/fontawesome-svg-core';
import * as S from './styles';

export type SocialIconLinkProps = { href: string; icon: IconProp; ariaLabel: string };
const SocialIconLink = ({ href, icon, ariaLabel }: SocialIconLinkProps) => {
  return (
    <a role="link" href={href} aria-label={ariaLabel} target="_blank">
      <S.SocialIconLink icon={icon} />
    </a>
  );
};

export default SocialIconLink;
