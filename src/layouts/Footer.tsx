import { useState } from 'react';
import { DevTools } from '../components/devtools/DevTools';

const Footer = () => {
  const [ devToolsOpenned, setDevToolsOpenned ] = useState(false);

  return (
    <>
      <hr className="divider" />

      <footer className="footer">
        <div className="footer__content flow" data-flow-space="sm">
          <p>
            <a href="/" className="styled-link">
              QuickSnip
            </a>{" "}
            is an open-source project that categorizes handy code snippets
            across various programming languages.
          </p>
          <p>
            Built with love and powered by an{" "}
            <a
              href="https://github.com/dostonnabotov/quicksnip"
              target="_blank"
              rel="noopener noreferrer"
              className="styled-link"
            >
              awesome community
            </a>
            . 🚀
          </p>
        </div>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Add your own snippet
              </a>
            </li>
            <li>
              <button
                onClick={() => setDevToolsOpenned((c) => !c)}
                className="styled-button"
              >
                Open the snippet DevTools
              </button>
              {
                devToolsOpenned ? (
                  <DevTools
                    closeModal={() => setDevToolsOpenned(false)}
                  />
                ) : null
              }
            </li>
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Edit this page on GitHub
              </a>
            </li>
          </ul>
        </nav>
        <nav className="footer__nav">
          <ul className="flow" data-flow-space="sm">
            <li>
              <a
                href="https://github.com/dostonnabotov/quicksnip"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                See the community
              </a>
            </li>
            <li>
              <a
                href="https://ko-fi.com/technoph1le"
                target="_blank"
                rel="noopener noreferrer"
                className="styled-link"
              >
                Support this project
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
