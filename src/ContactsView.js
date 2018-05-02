import React, {Component} from 'react'


class ContactsView extends Component {
    state = {
        contactName: 'janusz',
        contactNumber: '123123'
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log('submit')
    }

    handleChange = event => {
        this.setState({
            contactName: event.target.value
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
                    <input
                        value={this.state.contactNumber}
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