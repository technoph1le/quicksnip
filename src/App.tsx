import SnippetList from "@components/SnippetList";
import { useAppContext } from "@contexts/AppContext";
import Banner from "@layouts/Banner";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import Sidebar from "@layouts/Sidebar";

const App = () => {
  const { category } = useAppContext();

  return (
    <div className="container flow">
      <Header />
      <Banner />
      <main className="main">
        <Sidebar />
        <section className="flow">
          <h2 className="section-title">
            {category ? category : "Select a category"}
          </h2>
          <SnippetList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
