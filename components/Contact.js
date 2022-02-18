export default function Contact() {
  return (
    <section id="contact" style={{ background: "#efefef" }}>
      <div style={{ minWidth: "300px" }}>
        <div
          style={{
            lineHeight: "23px",
            padding: "40px",
            paddingTop: "20px",
          }}
        >
          <h1>{"<Contact me/>"}</h1>
          <b>Shimon Wosner</b>
          <br />
          <b>Phone</b> <a href="tel:+1845-274-2066">1(845)274-2066</a>
          <br />
          <b>Email</b>{" "}
          <a href="mailto:shwosner@gmail.com">shwosner@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
