import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About_Page from "./pages/About_Page";
import TeamGrid from "./pages/TeamGrid";
import Fendi from "./pages/fendi";
import Arief from "./pages/arief";
import Ari from "./pages/ari";
import Rocky from "./pages/rocky";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import KodeEtik from "./pages/KodeEtik";
import TataNilai from "./pages/TataNilai";
import LayananSMK3 from "./pages/layananSMK3";
import LayananAK3U from "./pages/LayananAK3U";
import LayananPesawat from "./pages/LayananPesawat";
import ProsesSMK3 from "./pages/prosesSMK3";
import "./assets/css/style.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Route>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About_Page} />
          <Route path="/team" component={TeamGrid} />
          <Route path="/fendi-details" component={Fendi} />
          <Route path="/arief-details" component={Arief} />
          <Route path="/ari-details" component={Ari} />
          <Route path="/rocky-details" component={Rocky} />
          <Route path="/visi-misi" component={PortfolioDetailsPage} />
          <Route path="/kode-etik" component={KodeEtik} />
          <Route path="/tata-nilai" component={TataNilai} />
          <Route path="/SMK3" component={LayananSMK3} />
          <Route path="/Proses-SMK3" component={ProsesSMK3} />
          <Route path="/AK3U" component={LayananAK3U} />
          <Route path="/Pesawat-uap-dan-bejana" component={LayananPesawat} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Error} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
