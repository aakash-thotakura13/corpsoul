import Heading from "../components/reusable/Heading";
import ContactPageForm from "../components/reusable/ContactPageForm";

import { TbMessageCircle } from "react-icons/tb";
// import { FaPhone } from "react-icons/fa6";
import { FaPhone, FaMailBulk, FaMapMarkedAlt, FaRegClock } from "react-icons/fa";



const contactInfo = [
  {
    icon: <FaPhone style={{ fontSize: "1em" }} />,
    title: "Phone Numbers",
    details: ["Main: +91 XXXXX XXXXX", "Orders: +91 XXXXX XXXXX"],
    color: "text-gold"
  },
  {
    icon: <FaMailBulk style={{ fontSize: "1em" }} />,
    title: "Email Addresses",
    details: ["General: info@corpsoul.com", "Orders: orders@corpsoul.com"],
    color: "text-gold"
  },
  {
    icon: <FaMapMarkedAlt style={{ fontSize: "1em" }} />,
    title: "Address",
    details: ["123 Business District,", "Hyderabad, Telangana 500001"],
    color: "text-gold"
  },
  {
    icon: <FaRegClock style={{ fontSize: "1em" }} />,
    title: "Business Hours",
    details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat-Sun: 9:00 AM - 2:00 PM"],
    color: "text-gold"
  }
];

export default function Contact() {
  return (
    <section>

      <div style={{ background: "", padding: "4em 0em", }} >

        <Heading
          title="Get in Touch with CorpSoul Solutions"
          description="Ready to partner with us for your corporate supply needs? We're here to help you enhance your business relationships with our quality products and exceptional service."
        />

      </div>

      <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto 4em", padding: "2em 0em", borderRadius: "1em", }}>

        <Heading
          title="Let's Build Lasting Business Relationships"
          description="Ready to streamline your corporate supplies? Get in touch with our team today for a personalized consultation and competitive quote." />

        <div style={{ width: "85%", minWidth: "350px", margin: "2em auto 1em", display: "flex", flexWrap: "wrap", gap: "2em", }}>

          <section style={{ flex: "1 1 350px", margin: "2em 0em", }}>

            <ContactPageForm />

          </section>

          <section style={{ margin: "0em auto", flex: "1 1 auto", minWidth: "350px", display: "flex", flexDirection: "column", backgroundColor: "#155DFC11", padding: "1em", borderRadius: "1em", }}>

            <div style={{ display: "grid", gap: "1em", margin: "0em auto", }}>
              {
                contactInfo.map((entry, id) => (
                  <div key={id} style={{ display: "flex", gap: "1em", margin: "2em auto", alignItems: "flex-start", }}>
                    <span style={{ fontSize: "2em", display: "inline", color: "white", backgroundColor: "#155DFC99", padding: "0.25em", borderRadius: "5em", placeContent: "center", placeItems: "center", float: "left", }}>{entry.icon}</span>
                    <div style={{}}>
                      <p className="font-bold text-yellow-700">{entry.title}</p>
                      <ul className="leading-tight text-sm text-gray-600">
                        {entry.details.map((entry, id) => <li key={id} style={{ listStyle: "disc", marginLeft: "2em", }}>{entry}</li>)}
                      </ul>
                    </div>
                  </div>
                ))
              }
            </div>

            <div style={{ backgroundColor: "white", border: "1px solid #00C95088", boxShadow: "0px 0px 2.5px 0px grey", margin: "1em 0em", padding: "1em", borderRadius: "1em", display: "flex", gap: "1em", alignItems: "center", justifyContent: "space-between", flex: "1 1 auto", }}>

              <div style={{ display: "flex", gap: "1em", alignItems: "center", }}>

                <div style={{ fontSize: "1.5em", color: "white", backgroundColor: "#00C950", padding: "0.25em", borderRadius: "5em", placeContent: "center", placeItems: "center", }}>
                  <TbMessageCircle style={{ fontSize: "1.6em", }} />
                </div>

                <div>
                  <p style={{ fontWeight: "bold", }}>Quick WhatsApp Support</p>
                  <p style={{ fontSize: "0.7em" }}>Get instant responses to your queries</p>
                </div>

              </div>

              <button style={{ backgroundColor: "#00C950", borderRadius: "5px", padding: "4px 8px", fontSize: "0.9em", fontWeight: "600", color: "white" }}>Chat Now</button>

            </div>

            <div style={{ backgroundColor: "white", border: "1px solid #155DFC88", boxShadow: "0px 0px 2.5px 0px grey", margin: "1em 0em", padding: "1em", borderRadius: "1em", display: "grid", gap: "1em", alignItems: "center", textAlign: "center", }}>

              <p style={{ fontWeight: "bold", }}>Download Our Catalogue</p>

              <p style={{ fontSize: "0.85em" }}>Browse our complete product range and pricing details</p>

              <button style={{ backgroundColor: "#155DFC11", borderRadius: "5px", padding: "4px 8px", fontSize: "0.9em", fontWeight: "600", color: "#155DFC" }}>Download PDF</button>

            </div>

          </section>

        </div>
      </div>


    </section>
  )
}