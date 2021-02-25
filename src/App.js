import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import SiteHeader from "./components/SiteHeader";
import SearchFilters from "./components/SearchFilters";
import LocationsPage from "./components/LocationsPage";

const App = () => {

	return (
		<div className=" min-h-screen bg-gray-200 antialiased  xl:flex xl:flex-col xl:h-screen">
				<SiteHeader />
				<div className="xl:flex-1 xl:flex xl:overflow-y-hidden">
					<SearchFilters />
					<Router history={history}>
						<Switch>
							<Route path="/" exact component={LocationsPage} />						
						</Switch>
					</Router>
				</div>
			</div>
	)
	
};

export default App;
