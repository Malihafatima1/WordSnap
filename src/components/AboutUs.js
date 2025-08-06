import "./About.css";

export default function About() {
  return (
    <div className="aboutus_container">
      <h1>About WordSnap</h1>
      <div className="aboutus_divider"></div>
      <p>
        <b>WordSnap</b> is a fast, modern web app for writers, students, and anyone who needs 
        accurate word and character counts with instant feedback.<br/>
        Enjoy a distraction-free experience and many helpful tools—all for free!
      </p>
      <h2>Features</h2>
      <ul>
        <li>Convert text to <b>UPPERCASE</b> and <b>lowercase</b></li>
        <li>Convert text to speech</li>
        <li>Live word & character count</li>
        <li>Estimated reading time</li>
        <li>Live text preview</li>
        <li>Clean, responsive UI</li>
      </ul>
      <div className="aboutus_contact">
        <p>
          Source Code: <a href="https://github.com/Malihafatima1/WordSnap" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </div>
    </div>
  );
}
