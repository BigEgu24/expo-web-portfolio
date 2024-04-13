import { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ScrollToTop from "./components/ScrollFix/ScrollToTop";
import { scroller } from "react-scroll";
import Homepage from "./pages/Homepage/Homepage";
import Contact from "./pages/Contact/Contact";
import ModalController from "./components/Modal/ModalController";
import { AppProvider } from "./components/Context/app-context";
import { PUBLIC_URL } from "@env";

function usePageViews() {
  let location = useLocation();
  useEffect(() => {
    //ga.send(["pageview", location.pathname]);
    if (location.hash) {
      console.log(location.hash.slice(1));
    }
    scroller.scrollTo(location.hash.slice(1), {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [location]);
}

function Routes({ location }) {
  usePageViews();
  return (
    <Switch location={location}>
      <Route
        exact
        path={PUBLIC_URL}
        render={(e) => {
          return <Homepage />;
        }}
      />
      <Route
        exact
        path={`${PUBLIC_URL==="/" ? "" : PUBLIC_URL}/contact`}
        render={(e) => {
          return <Contact />;
        }}
      />
      {/* <Route path="/page-not-found" exact>
    <NotFound />
  </Route> */}
    </Switch>
  );
}

function App() {
  return (
    <AppProvider>
      <BrowserRouter basename={"/"}>
        <Route
          render={({ location }) => {
            return (
              <div style={{width: "100%",}}>
                <ModalController />
                <ScrollToTop />
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    timeout={300}
                    classNames="fade"
                  >
                    <Routes location={location} />
                  </CSSTransition>
                </TransitionGroup>
              </div>
            );
          }}
        />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
