import { FaMoon } from "react-icons/fa";
import { ButtonContainer } from "./styles";

interface ToggleThemeProps {
  toggleTheme: () => void;
  isDark: boolean;
}

export default function ToggleTheme({ toggleTheme, isDark }: ToggleThemeProps) {
  return (
    <ButtonContainer onClick={toggleTheme}>
      <FaMoon color={isDark ? '#fafafa' : '#1f2729'} />
    </ButtonContainer>
  )
}