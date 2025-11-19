import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <main className="contact-page">
      <div className="contact-container">
        <h1>Let’s Connect</h1>
        <p>
          I’m always open to meaningful collaborations and thoughtful
          conversations. If you’re building something impactful and need a
          designer with clarity, precision, and product thinking—I’d be happy to
          connect.
        </p>
      </div>
      <div className="contact-container">
        <h1>Reach Out</h1>
        <p>Email: gopinath.maddula173@gmail.com</p>
        <p>Location: gopinath.maddula173@gmail.com</p>
      </div>
      <div className="contact-container">
        <h1>What I Do</h1>
        <p>
          I specialize in: <br />
          • UI/UX Design <br />
          • Product Design <br />
          • Frontend Development <br />• Research-driven problem solving
        </p>
      </div>
      <div className="contact-container">
        <h1>Elsewhere</h1>
        <p>
          You can also find my work and updates here: <br />
        </p>
      </div>
      <div className="contact-container">
        <h1>Let’s Build Something Exceptional</h1>
        <p>
          If my work resonates with you, feel free to get in touch. A simple
          hello is always welcome. <br />
        </p>
      </div>
    </main>
  );
};

export default Contact;
