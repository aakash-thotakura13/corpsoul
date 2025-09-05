import { FaEye, FaBullseye } from "react-icons/fa6";
import { TbUsers, TbBadge, TbBrandFlightradar24, TbUsersGroup } from "react-icons/tb";

import Heading from "../components/reusable/Heading";
import { SlArrowRightCircle, SlControlPlay } from "react-icons/sl";

const longTerm = [
  {
    icon: <FaEye style={{ fontSize: "1em" }} />,
    heading: "Our Vision",
    description: "To be the most reliable and innovative corporate supply partner in India.",
  },
  {
    icon: <FaBullseye style={{ fontSize: "1em" }} />,
    heading: "Our Mission",
    description: "Deliver superior quality, timely service, and impactful gifting solutions that foster lasting relationships.",
  },
];

const whyChoseCorpSoul = [
  {
    icon: <TbUsers style={{ fontSize: "1.5em", }} />,
    heading: "One-Stop Solution",
    description: "Complete range of corporate supplies under one roof",
    color: "#155DFC",
  },
  {
    icon: <TbBadge style={{ fontSize: "1.5em", }} />,
    heading: "Customization & Bulk Pricing",
    description: "Tailored solutions with competitive bulk rates",
    color: "#008000",
  },
  {
    icon: <TbBrandFlightradar24 style={{ fontSize: "1.5em", }} />,
    heading: "On-Time Delivery",
    description: "Reliable delivery schedules you can count on",
    color: "#ffa500",
  },
  {
    icon: <TbUsersGroup style={{ fontSize: "1.5em", }} />,
    heading: "Dedicated Support Team",
    description: "Personal account managers for seamless service",
    color: "#800080",
  },
]


export default function AboutUs() {
  return (
    <main>

      <div style={{ background: "", padding: "4em 0em", }} >

        <div style={{ width: "85%", margin: "0em auto", display: "flex", gap: "1em", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", }}>

          <h1 style={{ fontSize: "3.5rem", fontWeight: "600", lineHeight: "1em", flex: "1 1 auto", marginBottom: "0.5em", }}>Your Trusted Partner in Corporate Supply Solutions</h1>

          <Heading
            title=""
            description="CorpSoul Solutions is a trusted partner in corporate gifting, office stationery, and housekeeping supply needs. We help businesses enhance employee experience and brand value with curated, high-quality products."
          />

        </div>

      </div>

      <div style={{ width: "85%", margin: "4em auto", display: "flex", flexWrap: "wrap", gap: "2em 4em", justifyContent: "center", }}>
        {
          longTerm.map((item, id) => {
            return (
              <div key={id} style={{ border: item.heading.includes("Vision") ? "1px solid #155DFC77" : "1px solid #00800077", padding: "1.5em", borderRadius: "1em", flex: "1 1 auto", maxWidth: "350px", backgroundColor: item.heading.includes("Vision") ? "#155DFC11" : "#00800011", }}>
                <p style={{ display: "inline-block", fontSize: "1.4em", color: "white", backgroundColor: item.heading.includes("Vision") ? "#155DFC" : "#008000", padding: "0.5em", borderRadius: "0.5em" }}>{item.icon}</p>
                <h1 style={{ fontWeight: "500", padding: "0.5em 0em", }}>{item.heading}</h1>
                <p style={{ color: "gray" }}>{item.description}</p>
              </div>
            )
          })
        }
      </div>

      <div style={{ background: "", padding: "4em 0em", }}>

        <div style={{ width: "85%", margin: "0em auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1em", flex: "1 1 350px", }}>

          <div style={{ flex: "1 1 350px", }}>

            <Heading
              title="Who Are We"
              description=""
            />
            <p style={{ margin: "2em 0em", lineHeight: "1.65em", }}>CorpSoul Solutions has established itself as a leading provider of comprehensive corporate supply solutions. We understand that successful businesses need reliable partners who can deliver consistent quality and service.</p>
            <p style={{ margin: "2em 0em", lineHeight: "1.65em", }}>Our expertise spans across three core areas: thoughtful corporate gifting that strengthens relationships, comprehensive office stationery that keeps businesses running smoothly, and reliable housekeeping supplies that maintain professional environments.</p>
            <p style={{ margin: "2em 0em", lineHeight: "1.65em", }}>What sets us apart is our commitment to understanding each client&#39;s vision and requirements unique needs and delivering personalized solutions that exceed expectations. We believe in building long-term partnerships based on trust, quality, and reliability.</p>

          </div>

          <img
            src="https://res.cloudinary.com/ddgmru7d1/image/upload/v1757043572/photo-1739287088635-444554e7ac0e_zgzaza.jpg"
            alt="first_image"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              flex: "1 1 350px",
              objectFit: "cover",
              borderRadius: "1.5em",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />

        </div>

      </div>

      <div style={{ background: "", padding: "4em 0em", width: "85%", margin: "0em auto", }}>

        <Heading
          title="Why Choose CorpSoul Solutions?"
          description="We combine industry expertise with personalized service to deliver exceptional results for our corporate partners."
        />

        <div style={{ width: "85%", margin: "4em auto", display: "flex", flexWrap: "wrap", gap: "1em", justifyContent: "center", flex: "1 1 350px", }}>
          {
            whyChoseCorpSoul.map((item, id) => {
              return (
                // <div key={id} style={{ borderLeft: `1px solid ${item.color}77`, padding: "1.5em", borderRadius: "1em", flex: "1 1 350px", boxShadow: `${item.color} 1px 0px 2px 0.01px`, }}>
                <div key={id} style={{ borderRadius: "1em", padding: "1.35em 0em", flex: "1 1 auto", maxWidth: "300px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                  <p style={{ display: "inline-block", fontSize: "1.7em", color: item.color, backgroundColor: `${item.color}11`, border: `1px solid ${item.color}77`, padding: "0.5em", borderRadius: "50%" }}>{item.icon}</p>
                  <h1 style={{ fontWeight: "500", padding: "0.5em 0em", }}>{item.heading}</h1>
                  <p style={{ color: "gray" }}>{item.description}</p>
                </div>
              )
            })
          }
        </div>

        <div style={{ background: "", padding: "2em", width: "85%", margin: "0em auto", backgroundColor: "#155DFC22", borderRadius: "1em", }}>

          <h2 style={{ fontSize: "1.45em", fontWeight: "bold", textAlign: "center", }}>Ready to Partner With Us?</h2>
          <p style={{ textAlign: "center", }}>Let&#39;s discuss how CorpSoul Solutions can meet your corporate supply needs and help strengthen your business relationships.</p>

          <section style={{ display: "flex", flexWrap: "wrap", gap: "1em", padding: "1em 0em", flex: "1 1 auto", alignItems: "center", justifyContent: "center", }}>
            <button style={{ display: "flex", alignItems: "center", gap: "1em", backgroundColor: "#155DFC", color: "#FFFFFF", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }}>Request a Quote <SlArrowRightCircle /></button>
            <button style={{ display: "flex", alignItems: "center", gap: "1em", backgroundColor: "#FFFFFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", }}><SlControlPlay /> Explore Services</button>
          </section>

        </div>

      </div>

    </main>
  );
}