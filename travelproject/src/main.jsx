import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import DestinationIndex from "./components/DestinationIndex";
import { destinationAPI } from "./api/destinationApi";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ApiProvider api={destinationAPI}>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Header />
        <main className="flex-grow-1 row">
          <div className="col-12">
            <DestinationIndex />
          </div>
        </main>

        <Footer />
      </div>
    </ApiProvider>
  </StrictMode>,
);
