import { useState } from 'react';
import Button from '../components/Button';
import { GitHubIcon } from "../components/Icons";
import LinkButton from "../components/LinkButton";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";
import ThemeToggle from "../components/ThemeToggle";
import { DevTools } from '../components/devtools/DevTools';

const Header = () => {
  const [ devToolsOpenned, setDevToolsOpenned ] = useState(false);

  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
        {
          import.meta.env.MODE === 'production' ? (
            <LinkButton
              href="https://github.com/dostonnabotov/quicksnip/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <span>Add your snippet</span>
            </LinkButton>
          ) : (
            <>
              <Button onClick={() => setDevToolsOpenned((c) => !c)}>
                Open DevTools
              </Button>
              { devToolsOpenned ? (
                <DevTools
                  closeModal={() => setDevToolsOpenned(false)}
                />
              ) : null }
            </>
          )
        }
      </nav>
    </header>
  );
};

export default Header;
