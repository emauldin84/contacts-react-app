import React from 'react';
import './App.css';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Contacts from './Contacts';
import ContactDetails from './ContactDetails'

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
      <h3>Contacts</h3>
      <div className='container'>
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
      <Route  path='/contacts/:index'
      render={(props) => (
        <ContactDetails {...props}
                        contacts={this.state.contactsList}
                        
        />
      )}
      />
      </div>
        
      </div>
    );
  }

}

export default App;
