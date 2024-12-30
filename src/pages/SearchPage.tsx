import { useSearchParams } from "react-router-dom";
import SnippetList from "../components/SnippetList";
import Sidebar from "../layouts/Sidebar";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <Sidebar />
      <section className="flow">
        <h2 className="section-title">Search Results for: {query}</h2>
        <SnippetList query={query} />
      </section>
    </>
  );
};

export default SearchPage;
