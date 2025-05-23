import { FC } from "react";
import { Outlet } from "react-router-dom";

import { useAppContext } from "@contexts/AppContext";
import Banner from "@layouts/Banner";
import Footer from "@layouts/Footer";
import Header from "@layouts/Header";
import Sidebar from "@layouts/Sidebar";

interface ContainerProps {}

const Container: FC<ContainerProps> = () => {
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
          <Outlet />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Container;
