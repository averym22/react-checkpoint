import React from 'react'


 class EmailList extends React.Component {
     constructor(props) {
         super(props)
         this.state={viewingId:-1}
     }

    viewEmailHandler=(id)=> {
        if (id === this.state.viewingId) {
            id=-1;
        }
        this.setState({viewingId:id})
    }

    /*
    {
        "sender": "mattias@galvanize.com",
        "recipient": "jane@galvanize.com",
        "subject": "Last week's reports",
        "message": " Mrs. Dursley was thin and blonde and had nearly twice the usual amount of neck, which came in very useful as she spent so much of her time craning over garden fences, spying on the neighbors.",
        "date": "2020-06-23T18:25:43.511Z",
        "id": 4
    }
*/
     render () {
         return (
             <div>
                 <ul>

                     {this.props.emails.map((email) => {
                         if (email.id === this.state.viewingId) {
                            return (
                                <li> 
                                    <p onClick={() => this.viewEmailHandler(email.id)}>CLOSE</p>
                                    <p>Sender: {email.sender} </p>
                                    <p>Recipient: {email.recipient}</p>
                                    <p>Subject: {email.subject}</p>
                                    <p>Message: {email.message}</p>
                                    <p>Date: {email.date}</p>
                                </li>
                            )
                         }
                         return (
                            <li onClick={()=>this.viewEmailHandler(email.id)}>
                             <p><strong>Sender:</strong> {email.sender} <strong>Subject</strong> {email.subject}</p>
                             
                            </li>
                         )
                     })}

                 </ul>

             </div>

         )
     }
 }
   
export default EmailList

 


