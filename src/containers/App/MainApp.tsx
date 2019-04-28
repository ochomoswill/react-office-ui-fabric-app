import * as React from 'react';
import App from "../../routes/index"
// import Footer from "./Footer";
import "./MainApp.css"
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

class MainApp extends React.Component {
    public render() {

        // @ts-ignore
        const {match} = this.props;

        return (
            <div className="App">
                    <div className="header">
                        <Navbar/>
                    </div>
                    <div className="body">
                        <App match={match}/>
                        <div className="sidebar">
                            <Sidebar match={match}/>
                        </div>
                    </div>
                    {/*<div className="footer">
                        <Footer/>
                    </div>*/}
                
            </div>
        );
    }
}

export default MainApp;