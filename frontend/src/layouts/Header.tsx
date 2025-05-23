import { GitHubIcon, LeftAngleArrowIcon } from "@components/Icons";
import LinkButton from "@components/LinkButton";
import Logo from "@components/Logo";
import SearchInput from "@components/SearchInput";
import ThemeToggle from "@components/ThemeToggle";
import useGitHubStars from "@hooks/useGitHubStars";

const Header = () => {
  const { starsAmount, loading, error } = useGitHubStars();

  return (
    <header className="header">
      <Logo />
      <nav className="primary-nav">
        <SearchInput />
        <ThemeToggle />
        <LinkButton
          className="github-stars-btn"
          href="https://github.com/technoph1le/quicksnip/blob/main/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
          <span>Add your snippet</span>
          <LeftAngleArrowIcon className="github-stars__arrow" />
          <span className="github-stars__count">
            {loading
              ? "Loading..."
              : error
                ? "N/A"
                : `⭐ ${starsAmount}+ stars`}
          </span>
        </LinkButton>
      </nav>
    </header>
  );
};

export default Header;
