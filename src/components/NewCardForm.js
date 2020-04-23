import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "beer", "clap", "sparkling_heart", "heart_eyes_cat", "dog"]

const NewCardForm = (props) => {
return (
<form className="new-card-form" >
        <h1>Add a Card</h1>
        <div>
          <div>
            <label htmlFor="text">Text: </label>
            <input
              name="text"
              id="text"
              // onChange={ onFieldChange }
              // value={ text }
            />
          </div>
          <div>
            <label htmlFor="emoji">Emoji: </label>
            {/* <select
              name="emoji"
              id="emoji"
              onChange={ onFieldChange }
              value={ emoji }
            >
              { emojiOptions }
            </select> */}
          </div>
          <input
            type="submit"
            name="submit"
            value="Submit"
            // onClick={ onSubmitHandler }
          />
        </div>
      </form>
  )
}

// const NewStudentForm = (props) => {
//   const [formFields, setFormFields] = useState({
//     fullName: '',
//     email: '',
//   });

//   // event handlers
//   const onInputChange = (event) => {
//     const newFormFields = {
//       ...formFields,
//     }
//     newFormFields[event.target.name] = event.target.value;
//     setFormFields(newFormFields);
//   }

//   const onFormSubmit = (event) => {
//     event.preventDefault();

//     props.addStudentCallback(formFields);

//     setFormFields({
//       fullName: '',
//       email: '',
//     });
//   };

//   // validate email
//   const emailValid = () => {
//     return formFields.email.match(/\S+@\S+/) || formFields.email === '';
//   }

//   return (
//     <form
//       className="new-student-form"
//       onSubmit={onFormSubmit}
//       data-testid="NewStudentForm--form"
//     >
//       <div>
//         <label htmlFor="fullName">Name:</label>
//         <input
//           id="fullName"
//           name="fullName"
//           onChange={onInputChange}
//           value={formFields.fullName}
//           className="fullname"
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email"
//           name="email"
//           onChange={onInputChange}
//           value={formFields.email}
//           className={emailValid() ? "valid" : "invalid"}
//         />
//       </div>
//       <input
//         type="submit"
//         value="Add Student"
//       />
//     </form>
//   );
// }

export default NewCardForm;