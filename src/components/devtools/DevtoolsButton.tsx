import { useState } from "react";
import { ToolsIcon } from "../Icons";
import { DevTools } from "./DevTools";

export const DevtoolsButton = () => {
  const [devToolsOpenned, setDevToolsOpenned] = useState(false);
  return (
    <>
      <button className="button" onClick={() => setDevToolsOpenned((c) => !c)}>
        <ToolsIcon />
        <span>Open Snippet Devtools</span>
      </button>
      {devToolsOpenned ? (
        <DevTools closeModal={() => setDevToolsOpenned(false)} />
      ) : null}
    </>
  );
};
