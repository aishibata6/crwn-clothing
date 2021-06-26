import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

// functional component, since we don't need to add any states on this component
const Homepage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default Homepage;