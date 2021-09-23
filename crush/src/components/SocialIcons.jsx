import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialICons } from './styles/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <StyledSocialICons>
      <ul>
        <li>
          <a href="https://twitter.com">
            <FaTwitter />
          </a>
        </li>

        <li>
          <a href="https://facebook.com">
            <FaFacebook />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </StyledSocialICons>
  );
};

export default SocialIcons;
