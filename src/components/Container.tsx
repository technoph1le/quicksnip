import Header from "./Header";
import Banner from "./Banner";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import SnippetList from "./SnippetList";

const Container = () => {
  return (
    <div className="container flow">
      <Header />
      <Banner />
      <main className="main">
        <Sidebar />
        <section className="flow">
          <h2 className="section-title">Select a category</h2>
          <SnippetList />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Container;
