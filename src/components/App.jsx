import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Report } from 'notiflix';
import s from './App.module.css';
import PhonebookFrom from './PhonebookFrom/PhonebookFrom';
import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localContacts) {
      this.setState({ contacts: localContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  setContact = contact => {
    const isContactDuplicate = this.state.contacts.find(
      ({ name }) => contact.name === name
    );

    if (isContactDuplicate) {
      Report.failure(
        'Error of adding contact',
        `${contact.name} is alreary in contacts`,
        'Okay'
      );
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [
          {
            id: nanoid(),
            ...contact,
          },
          ...prevState.contacts,
        ],
      };
    });
  };

  handleFilter = filter => {
    this.setState({
      filter,
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={s.appWrapper}>
        <Section title="Phonebook">
          <PhonebookFrom onSubmit={this.setContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            filterValue={this.state.filter}
            handleFilter={this.handleFilter}
          />
          <Contacts
            contacts={filtredContacts}
            deleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
