import React, {Component} from 'react'


class ContactsView extends Component {
    state = {
        contactName: 'janusz',
        contactNumber: '123123'
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.contactName, this.state.contactNumber)
    }

    handleChange = event => {
        this.setState({
            contactName: event.target.value
        })
    }
    handleContactNumberChange = event => {
        this.setState({
            contactNumber: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Contacts</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.contactName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        value={this.state.contactNumber}
                        onChange={this.state.handleContactNumberChange}
                        />
                    <button>Add</button>
                </form>

                <ul>
                    <li>First contact</li>
                    <li>Second contact</li>
                </ul>
            </div>


        )
    }
}

export default ContactsView