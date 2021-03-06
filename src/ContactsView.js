import React, {Component} from 'react'
import './main.css'


class ContactsView extends Component {
    state = {
        contactName: '',
        contactNumber: '',
        contactEmail: '',
        contactCategory: '',
        contacts: [

        ]
    }

    removeContact = contactId => {
        this.setState(
            ({contacts}) => ({
                contacts: contacts.filter(
                    contact => contact.id !== contactId
                )
            })
        )
    }


    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.contactName, this.state.contactNumber, this.state.contactEmail, this.state.contactCategory)

        this.setState({
            contactName: '',
            contactNumber: '',
            contactEmail: '',
            contactCategory: '',
            contacts: this.state.contacts.concat({
                id: this.state.contacts.length === 0 ? 1 : Math.max(...this.state.contacts.map(contact => contact.id)) + 1,
                name: this.state.contactName,
                number: this.state.contactNumber,
                email: this.state.contactEmail,
                category: this.state.contactCategory

            })
        })

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

    handleContactEmailChange = event => {
        this.setState({
            contactEmail: event.target.value
        })
    }

    handleContactCategoryChange = event => {
        this.setState({
            contactCategory: event.target.value
        })
    }

    render() {
        return (
            <div className="contact">
                <h1>Contacts</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        value={this.state.contactName}
                        onChange={this.handleChange}
                        placeholder={'Name'}
                    />
                    <br/>
                    <input
                        value={this.state.contactNumber}
                        onChange={this.handleContactNumberChange}
                        placeholder={'Number'}
                    />
                    <br/>
                    <input
                        value={this.state.contactEmail}
                        onChange={this.handleContactEmailChange}
                        placeholder={'Email'}
                    />
                    <br/>
                     <select value={this.state.contactCategory}
                            onChange={this.handleContactCategoryChange}>
                         <option value="Category">Choose category</option>
                         <option value="Family">Family</option>
                        <option value="Friend">Friend</option>
                        <option value="Work">Work</option>
                        <option value="Other">Other</option>
                    </select>
                    <button>Add</button>
                </form>

                <ul>
                    {
                        this.state.contacts.map(
                            contact => (
                                <li key={contact.id}>
                                    <strong>{contact.name}</strong> <br/>
                                    {contact.number}, {contact.email}, [{contact.category}]

                                    <button
                                        onClick={() => this.removeContact(contact.id)}
                                        > Delete
                                    </button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>


        )
    }
}

export default ContactsView