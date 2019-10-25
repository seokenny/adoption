import React from 'react';
import AboutPage from './AboutPage';
import AdoptPage from './AdoptPage';
import './normalize.css';
import './main.css';

class App extends React.Component {
    state = { showAbout: <AboutPage/> };

    onAdoptTab = () => {
        this.setState({showAbout: <AdoptPage/>});
    }

    render() {
        return (
            <div id="full_container">
                {/* Banner Container */}
                <div id="banner_container" onClick={this.onAdoptTab}>
                </div>

                {this.state.showAbout}

                {/* Thank Container */}
                <div id="thank_container">
                    <h1 className="wt_center">Thank you for giving them a chance at a new life.</h1>
                </div>
            </div>
        );
    }
}

export default App;