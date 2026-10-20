import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", "90a224b6-56d7-4658-b0c6-8e4611ec91c4");
    setIsSending(true);
    setStatus("Sending your message…");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const result = await response.json();
      setStatus(
        result.success
          ? "Thanks — your message has been sent."
          : "Sorry, the message could not be sent. Please email me directly.",
      );
      if (result.success) form.reset();
    } catch {
      setStatus("Sorry, something went wrong. Please email me directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-panel">
        <div>
          <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p>
          <h2>
            Let’s make
            <br />
            <span>something useful.</span>
          </h2>
          <p className="contact-copy">
            Reach out to discuss full stack development opportunities and
            projects.
          </p>
          <div className="contact-direct">
            <a href="mailto:sivapragasam.dev@gmail.com">
              sivapragasam.dev@gmail.com <span>↗</span>
            </a>
            <a href="tel:+916381577048">
              +91 63815 77048 <span>↗</span>
            </a>
          </div>
          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/sivapragasam-a-b7330a417"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              //   href="https://github.com/SivapragasamGithub"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="contact-name">Your name</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your name"
            required
          />{" "}
          <br />
          <label htmlFor="contact-email">Your email</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            required
          />{" "}
          <br />
          <label htmlFor="contact-message">Your message</label>
          <textarea
            id="contact-message"
            name="message"
            rows="4"
            placeholder="How can I help?"
            required
          />{" "}
          <br />
          <button
            className="button contact-submit"
            type="submit"
            disabled={isSending}
          >
            {isSending ? "Sending…" : "Send message"}{" "}
            <span aria-hidden="true">↗</span>
          </button>
          <p className="contact-status" role="status" aria-live="polite">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
