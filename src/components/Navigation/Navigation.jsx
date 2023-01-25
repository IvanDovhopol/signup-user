import { useAuth } from 'hooks';
import { StyledLink } from './styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/tasks">Tasks</StyledLink>}
    </nav>
  );
};
