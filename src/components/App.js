import React from 'react';
import './normalize.css';
import './main.css';

class App extends React.Component {
    render() {
        return (
            <div id="full_container">
                {/* Banner Container */}
                <div id="banner_container">
                </div>

                {/* About Container */}
                <div id="about_container">
                    <div className="about_section">
                        <div className="row">
                            <h2>Help a <span class="highlight">friend</span> in need</h2>
                        </div>
                        <div className="row">
                            <p>Are you ready to have a new friend come into your life? Are you ready to change the life of an abandoned animal? You can look for a new friend to adopt here! Cats and dogs all across the United States are looking for a new owner to change their lives.</p>
                            <p>Not sure where to look for places to adopt? Don't worry; we'll do that for you. Now you can view a list of cats and dogs that are adoptable based on filters and locations. Just go to our adoption page and search for the perfect animal to adopt!</p>
                        </div>
                    </div>
                    <div className="about_video">
                        <iframe width="560" height="250" src="https://www.youtube.com/embed/wWw0iQF5Za8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>

                {/* Meet Container */}
                <div id="meet_container">
                    <div className="meet_text">
                        <h2>Meet your new<br/><span class="orange_highlight">best friend</span>!</h2>
                        <p>Find your perfect companion with our filter system.</p>
                    </div>
                </div>

                {/* Thank Container */}
                <div id="thank_container">
                    <h1 className="wt_center">Thank you for giving them a chance at a new life.</h1>
                </div>
            </div>
        );
    }
}

export default App;