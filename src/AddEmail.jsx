import React from 'react' 

class AddEmail extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            email:{
                sender:'',
                recipient:'',
                subject:'',
                message:''
            }
            
        }
    }
    /*
    {
        "sender": "mattias@galvanize.com",
        "recipient": "jane@galvanize.com",
        "subject": "Last week's reports",
        "message": " Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.",
        "date": "2020-06-23T18:25:43.511Z",
        "id": 4
    }*/
    sendEmail = () => {
        let newEmail={...this.state.email,date:new Date(Date.now()).toISOString(), id:this.props.newId}
        console.log(newEmail)
        fetch("http://localhost:3001/send",{
            method:'POST',    
            body: JSON.stringify(newEmail), 
            headers:{
                'Content-Type' : 'application/json'
            }
        })
        .then(this.props.afterSend())
        .catch(error=>console.log(error.message));
    }
    updateEmailState = (property,value) => {
        let newEmail = this.state.email;
        newEmail[property]=value;
        this.setState({newEmail})
    }
    render() {
        return (
            <form>
                <label for='sender'>Sender: </label><input id='sender' type="text" onChange={(e)=>this.updateEmailState('sender',e.target.value)} value={this.state.email.sender} /><br />
                <label for='recipient'>Recipient: </label><input id='recipient' type="text" onChange={(e)=>this.updateEmailState('recipient',e.target.value)} value={this.state.email.recipient} /><br />
                <label for='subject'>Subject: </label><input id='subject' type="text" onChange={(e)=>this.updateEmailState('subject',e.target.value)} value={this.state.email.subject} /><br />
                <label for='message'>Message: </label><textarea id='message' onChange={(e)=>this.updateEmailState('message',e.target.value)} value={this.state.email.message} cols="30" rows="5"/><br />
                <button type="button" onClick={this.sendEmail} >Send</button>
            </form>

        )
    }

}

export default AddEmail;