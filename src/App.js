import React from 'react';
import './App.css';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Contacts from './Contacts';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactsList: [],
    }
  }

  async componentDidMount() {
    this._getContactsAPI();
  }

  _getContactsAPI = async () => {
    const allContactsData = await axios.get(`https://demo1443058.mockable.io/codeproject_tutorial/api/contacts`);
    // console.log(allContactsData.data.contacts);
    this.setState({
      contactsList: allContactsData.data.contacts,
    })
  }

  render() {
    return (
      <div className="App">
      <Switch>
        <Route path='/contacts'
        render={(props) => (
          <Contacts {...props}
                    contacts={this.state.contactsList}
          />
        )}
        />
        <Redirect to='/contacts' />
      </Switch>
        
      </div>
    );
  }

}

export default App;
