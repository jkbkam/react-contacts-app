import React, {Component} from 'react'


class ContactsView extends Component {
    state = {
        contactName: 'janusz',
        contactNumber: '123123',
        contactEmail: 'emloe@melfo',
        contactCategory: 'family',
        contacts: [
            {
                id: 1,
                name: 'janek',
                number: '1212',
                email: 'eloelo@',
                category: 'family'
            },
            {
                id: 2,
                name: 'john',
                number: '122312',
                email: 'eloelo@',
                category: 'family'
            }
        ]
    }
    handleSubmit = event => {
        event.preventDefault()
        console.log(this.state.contactName, this.state.contactNumber, this.state.contactEmail, this.state.contactCategory)

        this.setState({
            contacts: this.state.contacts.concat({
                id: this.state.contacts.length + 1,
                name: this.state.contactName,
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
                    <br />
                    <input
                        value={this.state.contactEmail}
                        onChange={this.handleContactEmailChange}
                    />
                    <br />
                    <input
                        value={this.state.contactCategory}
                        onChange={this.handleContactCategoryChange}
                    />
                    <button>Add</button>
                </form>

                <ul>
                    {
                   this.state.contacts.map(
                    contact => (
                        <li key={contact.id}>
                            {contact.name} <br />
                            {contact.number} : {contact.email} : {contact.category}
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