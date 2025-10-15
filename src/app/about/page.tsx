"use client";

import { useRouter } from "next/navigation";
import { FaEye, FaBullseye } from "react-icons/fa6";
import { SlArrowRightCircle, SlControlPlay } from "react-icons/sl";
import { TbUsers, TbBadge, TbBrandFlightradar24, TbUsersGroup } from "react-icons/tb";

import Heading from "../components/reusable/Heading";

import whoAreWe from "../assets/whoAreWe.jpg"


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
];

export default function AboutUs() {

  const router = useRouter();

  return (
    <main>

      <div style={{ background: "linear-gradient(to bottom, #155DFC00, #155DFC21)", padding: "1em 0em", }}>

        <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", display: "grid", gap: "1em", textAlign: "center", }}>

          <h1 style={{ fontSize: "2.5rem", minWidth: "350px", fontWeight: "600", lineHeight: "1em", flex: "1 1 auto", margin: "1.4em auto 0em", }}>Your Trusted Partner in Corporate Supply Solutions</h1>

          <div style={{ margin: "2em auto" }}>

            <Heading
              title=""
              description="CorpSoul Solutions is a trusted partner in corporate gifting, office stationery, and housekeeping supply needs. We help businesses enhance employee experience and brand value with curated, high-quality products."
            />

          </div>

        </div>

      </div>

      <div style={{ background: "linear-gradient(to bottom, #155DFC21, #155DFC00)", padding: "2em 0em 3.5em", }}>

        <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", }}>
          <div style={{ padding: "1em auto", display: "flex", flexWrap: "wrap", gap: "2em", justifyContent: "space-between", }}>
            {
              longTerm.map((item, id) => {
                return (
                  <div key={id}
                    style={{
                      padding: "1.5em 2em", flex: "0 1 auto", maxWidth: "590px", minWidth: "350px", borderRadius: "1em",
                      border: item.heading.includes("Vision") ? "1px solid #155DFC77" : "1px solid #00800077",
                      background: item.heading.includes("Vision") ? "#155DFC11" : "#00800011",
                    }}
                  >
                    <p style={{ display: "inline-block", fontSize: "1.4em", color: "white", backgroundColor: item.heading.includes("Vision") ? "#155DFC" : "#008000", padding: "0.5em", borderRadius: "0.5em" }}>{item.icon}</p>
                    <h1 style={{ fontWeight: "500", padding: "0.5em 0em", }}>{item.heading}</h1>
                    <p style={{ color: "gray" }}>{item.description}</p>
                  </div>
                )
              })
            }
          </div>
        </div>

      </div>

      <div style={{ background: "linear-gradient(to bottom, #155DFC00, #155DFC21)", padding: "2em 0em", }}>

        <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", padding: "2em auto", display: "flex", gap: "2em 4em", flexWrap: "wrap", justifyContent: "center", alignItems: "center", }}>

          <div style={{ flex: "1 1 350px", }}>

            <Heading
              title="Who Are We"
              description=""
            />
            <p style={{ margin: "2em 0.7em", lineHeight: "1.65em", }}>CorpSoul Solutions has established itself as a leading provider of comprehensive corporate supply solutions. We understand that successful businesses need reliable partners who can deliver consistent quality and service.</p>
            <p style={{ margin: "2em 0.7em", lineHeight: "1.65em", }}>Our expertise spans across three core areas: thoughtful corporate gifting that strengthens relationships, comprehensive office stationery that keeps businesses running smoothly, and reliable housekeeping supplies that maintain professional environments.</p>
            <p style={{ margin: "2em 0.7em", lineHeight: "1.65em", }}>What sets us apart is our commitment to understanding each client&#39;s vision and requirements unique needs and delivering personalized solutions that exceed expectations. We believe in building long-term partnerships based on trust, quality, and reliability.</p>

          </div>

          <div style={{ flex: "1 1 350px", }}>
            <img
              src={whoAreWe.src}
              alt="first_image"
              style={{
                width: "100%",
                margin: "0em auto",
                maxWidth: "600px",
                height: "auto",
                flex: "1 1 320px",
                objectFit: "cover",
                borderRadius: "1.5em",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            />
          </div>

        </div>

      </div>

      <div style={{ background: "linear-gradient(to bottom, #155DFC21, #155DFC00)", padding: "2em 0em", }}>

        <Heading
          title="Why Choose CorpSoul Solutions?"
          description="We combine industry expertise with personalized service to deliver exceptional results for our corporate partners."
        />

        <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "2em auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", flex: "1 1 350px", }}>
          {
            whyChoseCorpSoul.map((item, id) => {
              return (
                <div key={id} style={{ borderRadius: "1em", padding: "1em 0em", flex: "1 1 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", }}>
                  <p style={{ display: "inline-block", fontSize: "1.7em", color: item.color, backgroundColor: `${item.color}11`, border: `1px solid ${item.color}77`, padding: "0.5em", borderRadius: "50%" }}>{item.icon}</p>
                  <h1 style={{ fontWeight: "500", padding: "0.5em 0em", }}>{item.heading}</h1>
                  <p style={{ color: "gray", width: "250px", }}>{item.description}</p>
                </div>
              )
            })
          }
        </div>

      </div>

      <div style={{ background: "", padding: "2em", maxWidth: "1200px", minWidth: "350px", margin: "0em auto 4em", backgroundColor: "#155DFC22", borderRadius: "1em", }}>

        <h2 style={{ fontSize: "1.45em", fontWeight: "bold", textAlign: "center", }}>Ready to Partner With Us?</h2>
        <p style={{ textAlign: "center", }}>Let&#39;s discuss how CorpSoul Solutions can meet your corporate supply needs and help strengthen your business relationships.</p>

        <section style={{ maxWidth: "350px", margin: "1em auto", display: "flex", flexWrap: "wrap", gap: "1em", padding: "1em 0em", flex: "1 1 auto", alignItems: "center", justifyContent: "center", }}>

          <button style={{ backgroundColor: "#FFFFFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", flex: "1 1 auto", }} onClick={() => router.push("/contact")}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5em", justifyContent: "center", }}>Request a Quote <SlArrowRightCircle /></span>
          </button>

          <button style={{ backgroundColor: "#155DFC", color: "#FFFFFF", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", flex: "1 1 auto", }} onClick={() => router.push("/services")}>
            <span style={{ display: "flex", alignItems: "center", gap: "0.5em", justifyContent: "center", }}><SlControlPlay /> Explore Services</span>
          </button>

        </section>

      </div>

    </main>
  );
};