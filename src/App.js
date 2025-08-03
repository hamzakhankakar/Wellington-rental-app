import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar/Navbar"
import Homepage from "./pages/Homepage/Homepage"
import Auth from "./pages/Auth/Auth";
import DetailModal from "./components/DetailModal/DetailModal";
import SplashAnimation from "./components/SplashAnimation/SplashAnimation";
import PlayAnimation from "./components/PlayAnimation/PlayAnimation";
import StreetViewExample from "./components/Maps/StreetView";
import SatelliteMap from "./components/Maps/Aerial";
import Agent from "./pages/Agent";
import { selectCurrentUser } from './redux/auth/auth.selectors';
// import { selectSearchResults } from "./redux/search/search.selectors";
import { checkUserSession } from "./redux/auth/auth.actions";
import LandingPage from "./pages/LandingPage";
import Blog from "./pages/Blog";
import Properties from "./pages/Properties/Properties";
import Agents from "./pages/Agents/Agents"

const App = () => {
    const currentUser = useSelector(selectCurrentUser);
    // const searchResults = useSelector(selectSearchResults);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [dispatch])

    return (
        <div className="App">
            <>
                <Navbar />
                <DetailModal />
            </>
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route
                        exact
                        path="/"
                    >
                        <Redirect to="/browse" />
                    </Route>
                    <Route
                        path="/splash"
                        component={SplashAnimation}
                    />
                    <Route
                        path="/play"
                        component={PlayAnimation}
                    />
                    <Route
                        path="/map/aerial-view"
                        component={SatelliteMap}
                    />
                    <Route

                        path="/map/street-view"
                        component={StreetViewExample}
                    />
                    {/* Protect the street-view route */}
                    {/* <PrivateRoute
                        path="/map/street-view"
                        component={StreetViewExample}
                        currentUser={currentUser}
                        loading={loading}

                    /> */}

                    <Route
                        path="/browse"
                        component={Homepage}
                    />
                    <Route
                        path="/properties"
                        component={Properties}
                    />
                    <Route
                        path="/agents"
                        component={Agents}
                    />
                    <Route
                        path="/property/:id"
                        component={LandingPage}

                    />
                    <Route
                        path="/blog"
                        component={Blog}

                    />

                    <Route
                        exact
                        path="/login"
                        render={() => currentUser ? <Redirect to="/splash" /> : <Auth />}
                    />
                    <Route
                        exact
                        path="/agent"
                        render={() => currentUser
                            ? <Agent />
                            : <Redirect to="/login" />}
                    />


                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </AnimatePresence>
        </div>
    )
}

export default App;
