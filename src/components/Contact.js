import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact_container">
      <h1>Contact Us</h1>
      <div className="contact_divider"></div>
      <p>
        Have a suggestion, need help, or found a bug?<br/>
        Get in touch and I'll respond as soon as possible!
      </p>
      <ul>
        <li>
          <b>Email:</b>{" "}
          <a href="mailto:malihafatima6367.com">malihafatima6367.com</a>
        </li>
        <li>
          <b>GitHub Issues:</b>{" "}
          <a
            href="https://github.com/Malihafatima1/WordSnap/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open an Issue
          </a>
        </li>
      </ul>
      <p>
        Follow the project on{" "}
        <a
          href="https://github.com/Malihafatima1/WordSnap"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
