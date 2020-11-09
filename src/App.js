import logo from './logo.svg';
import './App.css';
import React from 'react';
import EmailList from './EmailList'
import AddEmail from './AddEmail'
class App extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        emails : []
      }
  }


  fetchEmail = async () => {
    console.log("fetching email list")
    const response = await fetch('http://localhost:3001/emails',{
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    const emails = await response.json()

    this.setState({emails : emails})
    
  }  


  componentDidMount = async() => {

    this.fetchEmail()

  }
  
  render () {

    return (

      <div className="App">
        <h1> Inbox </h1>
        {/*<EmailSearch />*/}
        <AddEmail afterSend={()=>this.fetchEmail()} newId={this.state.emails.length}/>
        <EmailList emails={this.state.emails}/>   
      
      </div>

    );


  }
    
}

export default App;
