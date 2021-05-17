import React from "react";
import { connect } from "react-redux";

import { signIn, signOut } from "../features/auth/authSlice";

// rewriting this as function component creates errors! Find out why.
class GoogleAuth extends React.Component {
	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"621250980106-g8vsh9vi8rsv5vtr1tmh6fr4f8r0jnej.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		console.log("onAuthChange: ", isSignedIn, this.auth);
		if (isSignedIn) {
			this.props.dispatch(signIn(this.auth.currentUser.get().getId()));
		} else {
			this.props.dispatch(signOut());
		}
	};

	onSignInClick = () => {
		this.auth.signIn();
	};

	onSignOutClick = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button
					onClick={this.onSignOutClick}
					className="w-full hover:text-white  sm:hover:bg-indigo-500 pt-2 pb-1 pl-0 pr-4 sm:px-4 inline-flex items-center"
				>
					<span className="text-gray-400 sm:text-gray-700 hover:text-white">
						Google Sign Out
					</span>
					<span className="ml-2 px-2 inline-flex items-center rounded bg-red-400 text-white font-bold text-lg">
						G
					</span>
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onSignInClick}
					className="w-full  hover:text-white sm:hover:bg-indigo-500 pt-2 pb-1 pl-0 pr-4 sm:px-4 inline-flex items-center"
				>
					<span className="text-gray-400 sm:text-gray-700 hover:text-white">
						Google Sign In
					</span>
					<span className="ml-2 px-2 inline-flex items-center rounded bg-red-400 text-white font-bold text-lg">
						G
					</span>
				</button>
			);
		}
	}

	render() {
		return <div className="flex w-full">{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(GoogleAuth);
