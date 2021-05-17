import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./history";
import SiteHeader from "./components/SiteHeader";
import SearchFilters from "./components/SearchFilters";
import LocationsPage from "./pages/LocationsPage";
import UsersPage from "./pages/UsersPage";
import ThreePage from "./pages/ThreePage";
import ThreePage2 from "./pages/ThreePage2";
import ThreePage3 from "./pages/ThreePage3";
import ThreePage4 from "./pages/ThreePage4";
import ThreePage5 from "./pages/ThreePage5";

const App = () => {
	return (
		<div className=" min-h-screen bg-gray-200 antialiased  xl:flex xl:flex-col xl:h-screen">
			<Router history={history}>
				<SiteHeader />
				<div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
					<SearchFilters />
					<Switch>
						<Route path="/" exact component={LocationsPage} />
						<Route path="/Users" exact component={UsersPage} />
						<Route path="/Three" exact component={ThreePage} />
						<Route path="/Three2" exact component={ThreePage2} />
						<Route path="/Three3" exact component={ThreePage3} />
						<Route path="/Three4" exact component={ThreePage4} />
						<Route path="/Three5" exact component={ThreePage5} />
					</Switch>
				</div>
			</Router>
		</div>
	);
};

export default App;
