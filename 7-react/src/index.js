import React from "react";
import {render} from "react-dom";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red100, red500, red700} from 'material-ui/styles/colors';
import MessageInABox from "./components/MessageInABox";

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: red500,
        primary2Color: red700,
        primary3Color: red100
    }
})

class App extends React.Component {

    render() {
        const values = [
            {
                "title": "I'm a title!",
                "subtitle": "I'm a subtitle!",
                "message": "I'm a child component!"
            }, {
                "title": "I'm another title!",
                "subtitle": "I'm a subtitle too!",
                "message": "I'm a message!"
            }, {
                "title": "I'm a title too!",
                "subtitle": "I think I'm also a subtitle. Am I?",
                "message": "I'm also a message!"
            }
        ];
        return (
            <div>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div>
                        <h1>Hello from React!</h1>
                        {values.map((value) => {
                            return (<MessageInABox title={value.title} subtitle={value.subtitle} message={value.message}/>)
                        })
}
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }

}

render(
    <App/>, document.getElementById("root"));
