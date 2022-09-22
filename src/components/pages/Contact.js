import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { capitalizeFirstLetter} from "../../utils/helpers";


// each contact will have a name email subject and message
const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  // const { name, email, message } = formState;

  // function to handle any errors on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({ [e.target.name]: e.target.value });
      console.log("Form", formState);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch('http://localhost:3002/send', {
  //       method: "POST",
  //       body: JSON.stringify(this.state),
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //     }).then(
  //     (response) => (response.json())
  //       ).then((response)=> {
  //     if (response.status === 'success') {
  //       alert("Message Sent.");
  //       this.resetForm()
  //     } else if(response.status === 'fail') {
  //       alert("Message failed to send.")
  //     }
  //   })
  // }
// };

  // function to validate email and check for any empty feilds on blur from field and stuff
  const handleChange = (e) => {
    const capitalFieldName = capitalizeFirstLetter(e.target.name);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a valid email address so I can get in touch with you.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value) {
        setErrorMessage(capitalFieldName + ` is currently blank. Please fill out this field.`);
      } else {
        setErrorMessage("");
      }
    }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <form
          action="#"
          className="space-y-8"
          id="contact-form"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="Name"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label
              htmlFor="email"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let me know how I can help you"
              required
              onBlur={handleChange}
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className=" mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Leave a message..."
              required
              onBlur={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Send Message
          </button> <span>
          <h2 className="errorMessage text-xl tracking-tight font-extrabold text-center text-gray-900 ">
          {errorMessage}
        </h2>
        </span>
          {/* class="py-3 px-5 text-sm font-medium text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message */}
        </form>
      </div>
    </section>
  );
};

export default Contact;
