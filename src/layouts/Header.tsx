import { GitHubIcon } from "../components/Icons";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";
import ThemeToggle from "../components/ThemeToggle";
import { DevtoolsButton } from "../components/devtools/DevtoolsButton";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
        {import.meta.env.MODE === "development" ? (
          <DevtoolsButton />
        ) : (
          <LinkButton
            href="https://github.com/dostonnabotov/quicksnip/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>Add your snippet</span>
          </LinkButton>
        )}
      </nav>
    </header>
  );
};

export default Header;
