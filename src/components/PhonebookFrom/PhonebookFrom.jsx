import { Component } from 'react';
import { nanoid } from 'nanoid';
import s from './PhonebookFrom.module.scss';

class PhonebookFrom extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputID = nanoid();
  numberInputID = nanoid();

  onFormChange = e => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <div className={s.phonebookFormWrapper}>
        <form onSubmit={this.onFormSubmit} className={s.phonebookForm}>
          <label className={s.inputLabel} htmlFor={this.nameInputID}>
            Name
          </label>
          <input
            id={this.nameInputID}
            value={this.state.name}
            onChange={this.onFormChange}
            className={s.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label className={s.inputLabel} htmlFor={this.numberInputID}>
            Number
          </label>
          <input
            id={this.numberInputID}
            onChange={this.onFormChange}
            className={s.formInput}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default PhonebookFrom;
