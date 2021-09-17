import { ActiveLink } from '../ActiveLink';
import ToogleTheme from '../ToogleTheme'
import { HeaderContainer, HeaderContent } from './styles'

interface HeaderProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export function Header({ toggleTheme, isDark }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ActiveLink href="/" activeClassName="active">
          <img src="/images/logo.svg" alt="ig.news" />
        </ActiveLink>
        <nav>
          <ActiveLink href="/" activeClassName="active">
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName="active">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <ToogleTheme toggleTheme={toggleTheme} isDark={isDark} />
      </HeaderContent>
    </HeaderContainer>
  )
}

