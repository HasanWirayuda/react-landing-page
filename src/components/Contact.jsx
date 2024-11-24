import "../styles/Contact.css";

export default function Contact({ contactSection, parse }) {
  return (
    <div id="contact">
      <div className="wrapper">
        <div className="footer">
          {contactSection.map((item, i) => (
            <div className="footer-section" key={i}>
              {parse(item.content)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
