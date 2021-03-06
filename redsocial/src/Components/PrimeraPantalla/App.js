import React, {Component} from 'react';
import firebase from 'firebase';

class App extends Component{
    handleAuth(){
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
         .then(result => console.log(`${result.user.email} ha iniciado seión`))
         .catch(error => console.log(`Error${error.code}: ${error.message}`));
    }
    render(){
        return(
            <div className="App">
                <div className="App-header">
                    <h2>CeliBook</h2>
                </div>
                <p className="App-intro">
                    <button onClick={this.handleAuth}>Login con Google</button>
                </p>
            </div>
        )
    }
}

export default App;