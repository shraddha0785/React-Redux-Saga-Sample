import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage, fetchMainAccount} from '../actions/message';
import {Link} from 'react-router-dom';

class App extends Component {

	_onChange = (value) => {
        this.props.setMessage(value)
        this.props.fetchMainAccount(value)
	}

    render () {

    	const {message} = this.props;

        return (
        	<div>
                <InputPreview
                    value={message}
                    onChange={this._onChange}/>
                <Link to="/about">
                    <button>Go to About</button>
                </Link>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    message: state.message
})

export const mapDispatchToProps = dispatch => ({
    setMessage: message => dispatch(setMessage(message)),
    fetchMainAccount: message => dispatch(fetchMainAccount(message))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(App);