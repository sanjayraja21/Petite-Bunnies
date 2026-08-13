
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function ContactPage() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_9yig2rn",
        "template_hhyj5lz",
        formRef.current,
        {
          publicKey: "AsTxVbexbKuhWh_W3",
        }
      )
      .then(() => {
        setStatus("Message sent successfully!");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("Something went wrong. Please try again.");
      });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 20px",
        background: "#f2f2f2",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "10px",
            color: "#111111",
            fontFamily: "sans-serif",
            
          }}
        >
          <storng>Contact</storng>
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#777777",
            fontSize: "18px",
            marginBottom: "35px",
          }}
        >
          Get in touch
        </p>

        <div
          style={{
            background: "#f7f7f7",
            padding: "20px",
            borderRadius: "12px",
            marginBottom: "30px",
            lineHeight: "1.8",
            color: "#333333",
          }}
        >
          <p>
            <strong>Phone:</strong> 9841439226 / 9361827537
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:Petite.bunnies.1@gmail.com"
              style={{
                color: "#222222",
                textDecoration: "none",
              }}
            >
              Petite.bunnies.1@gmail.com
            </a>
          </p>

          <p>
            <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/petite.bunnies._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#222222",
                textDecoration: "none",
              }}
            >
              petite.bunnies._
            </a>
            / 
            <a
              href="https://www.instagram.com/sankbeast_boy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#222222",
                textDecoration: "none",
              }}
            >
              sankbeast_boy
            </a>
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit}>

          {/* Name */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#222222",
              }}
            >
              Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #cccccc",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                color: "#222222",
                background: "#ffffff",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#222222",
              }}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #cccccc",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                color: "#222222",
                background: "#ffffff",
              }}
            />
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "20px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#222222",
              }}
            >
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #cccccc",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                color: "#222222",
                background: "#ffffff",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "25px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "8px",
                fontWeight: "bold",
                color: "#222222",
              }}
            >
              Message
            </label>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="6"
              required
              style={{
                width: "100%",
                padding: "15px",
                border: "1px solid #cccccc",
                borderRadius: "8px",
                fontSize: "16px",
                outline: "none",
                resize: "vertical",
                fontFamily: "Arial, sans-serif",
                color: "#222222",
                background: "#ffffff",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              display: "block",
              width: "100%",
              minHeight: "56px",
              padding: "15px 30px",
              border: "1px solid #111111",
              borderRadius: "8px",
              background: "#111111",
              color: "#ffffff",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#444444";
              e.currentTarget.style.borderColor = "#444444";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#111111";
              e.currentTarget.style.borderColor = "#111111";
            }}
          >
            Submit
          </button>

          {/* Status */}
          {status && (
            <p
              style={{
                marginTop: "20px",
                textAlign: "center",
                fontWeight: "600",
                color: status.includes("success")
                  ? "#222222"
                  : "#666666",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
