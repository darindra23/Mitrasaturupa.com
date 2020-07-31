import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About_Page from "./pages/About_Page";
import TeamGrid from "./pages/TeamGrid";
import Fendi from "./pages/fendi";
import Arief from "./pages/arief";
import Ari from "./pages/ari";
import TestimonialPage from "./pages/TestimonialPage";
import FAQ from "./pages/FAQ";
import OurPricing from "./pages/PricingPage";
import SignUp from "./pages/SignUpPage";
import ServicePage from "./pages/ServicePage";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import Portfolio from "./pages/PortfolioPage";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import BlogFullPage from "./pages/BlogFullPage";
import BlogGridPage from "./pages/BlogGridPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";
import Error from "./pages/Error";
import LayananSMK3 from "./pages/layananSMK3";
import LayananAK3U from "./pages/LayananAK3U";
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
          <Route path="/testimonial" component={TestimonialPage} />
          <Route path="/faq" component={FAQ} />
          <Route path="/our-pricing" component={OurPricing} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/services" component={ServicePage} />
          <Route path="/service-details" component={ServiceDetailsPage} />
          <Route path="/portfolio-grid" component={Portfolio} />
          <Route path="/portfolio-details" component={PortfolioDetailsPage} />
          <Route path="/SMK3" component={LayananSMK3} />
          <Route path="/Proses-SMK3" component={ProsesSMK3} />
          <Route path="/AK3U" component={LayananAK3U} />
          <Route path="/blog-full-width" component={BlogFullPage} />
          <Route path="/blog-grid" component={BlogGridPage} />
          <Route path="/blog-details" component={BlogDetailsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={Error} />
        </Switch>
      </Route>
    </React.Fragment>
  );
}

export default App;
