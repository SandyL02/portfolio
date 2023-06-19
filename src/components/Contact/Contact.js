import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <div id="contact"></div>
      <h2>Me contacter</h2>
      <p>
        Si vous souhaitez me contacter, vous pouvez m'envoyer un{" "}
        <a href="mailto:sandy.lenormand02@gmail.com" className="email-link">
          mail
        </a>
        , je répondrai avec enthousiasme à toute demande, question ou
        opportunité professionnelle que vous pourriez avoir.{" "}
      </p>
      <p>
        Je suis également présente sur{" "}
        <a
          href="https://www.linkedin.com/in/sandy-lenormand-24a867261/"
          target="blank"
        >
          Linkedin
        </a>
        .
      </p>{" "}
      <p>
        Je suis impatiente de recevoir vos messages et de discuter de projets
        passionnants ou de toute collaboration future. Je vous remercie de votre
        visite et j'espère que mon travail a suscité votre intérêt.
      </p>
      <p>
        {" "}
        N'hésitez pas à prendre contact et à me laisser un message, je serai
        ravie de vous répondre dans les plus brefs délais.
      </p>
    </section>
  );
}
