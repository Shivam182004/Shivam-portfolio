import styles from './ContactStyles.module.css';
import { getDatabase, ref, set } from 'firebase/database'; // Use `set` instead of `push`
import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
  databaseURL: "https://shivportfolio-6255c-default-rtdb.firebaseio.com",
  // Add other config options like apiKey, authDomain if needed
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Collect form data
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Validate data (optional)
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    // Generate a unique key based on timestamp
    const uniqueKey = `${Date.now()}_${name.replace(/\s+/g, '_')}`;

    // Reference to the specific key in the database
    const messageRef = ref(database, `messages/${uniqueKey}`);

    // Set data as key-value pairs
    set(messageRef, { name, email, message })
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset(); // Clear the form
      })
      .catch((error) => {
        console.error('Error saving message:', error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
