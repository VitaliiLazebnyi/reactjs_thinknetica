import React from 'react';

function FeedbackForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
    };
    console.log(formData);
  };

  return <form onSubmit={handleSubmit}>
    <div className='row'>
      <label>Name:</label>
      <input type='text' name='name' />
    </div>
    <div className='row'>
      <label>Email:</label>
      <input type='text' name='email' />
    </div>
    <div className='row'>
      <label>Message:</label>
      <textarea type='text' name='message' />
    </div>
    <div className='row'>
      <input type='submit' value='Submit' />
    </div>
  </form>;
}

export default FeedbackForm;
