/*eslint-disable */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import 'styles/index.scss';
import App from '../../components/App';

class Root extends Component {
	render() {
		return (
			<Provider store={this.props.store}>
				<BrowserRouter>
					<Switch>
						<Route path='/' component={App} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

Root.propTypes = {
	store: PropTypes.object
};

// function mapStateToProps(state) {
// 	return {
// 	};
// }
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators(
// 		{
// 		},
// 		dispatch
// 	);
// }

export default connect(
	null,
	null
)(Root);
