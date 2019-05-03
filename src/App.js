import React from 'react';
import './App.css';
import { NavLink, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Contacts from './Contacts';
import ContactDetails from './ContactDetails';
import Search from './Search';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactsList: [],
      searchWord: ''
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

  _searchHandler = (e) => {
    this.setState({
      searchWord: e.target.value
    })
    console.log(e.target.value)

  }

  render() {
    return (
      <div className="App">
        <h3>Contacts</h3>
        <Search search={this._searchHandler}/>
        <div className='container'>
        <Switch>
          <Route path='/contacts'
          render={(props) => (
            <Contacts {...props}
                      contacts={this.state.contactsList}
                      searchWord={this.state.searchWord}
            />
          )}
          />
          <Redirect to='/contacts' />
        </Switch>
        <Route path='/contacts/:index'
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
