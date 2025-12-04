"use client";

import { useRouter } from 'next/navigation';
import { SlArrowRightCircle, SlControlPlay, } from "react-icons/sl";
import { FaCheck, FaRegEdit, FaRupeeSign, FaTruckMoving, FaHeadset, FaShieldAlt, } from "react-icons/fa";

import RevealOnScroll from "./components/reusable/RevealOnScroll";
import Heading from "./components/reusable/Heading";

import trustedPartner from "./assets/trustedPartner.jpg"


const firstRowData = [
  {
    heading: "5 Star",
    description: "Rating",
  },
  {
    heading: "5 Years",
    description: "Experience",
  },
  {
    heading: "99%",
    description: "On-Time Delivery",
  },
];

const minServices = [
  {
    heading: "Corporate Gifting",
    description: "Thoughtfully curated gift hampers, branded merchandise, and personalized corporate gifts for all occasions.",
    points: [
      "Festival Gifts",
      "Employee Kits",
      "Client Hampers",
      "Branded Merchandise",
    ],
    // image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756617719/photo-1671749999622-4087a86868cc_xlhpbl.jpg",
    // image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1758690576/corporate-gifting_x9jyee.jpg",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1758695423/corporate-gifting_6_p7wydc.jpg",
  },
  {
    heading: "Office Stationery",
    description: "Complete range of office supplies from notebooks and pens to whiteboards and filing systems.",
    points: [
      "Writing Materials",
      "Files & Folders",
      "Desk Accessories",
      "Presentation Tools",
    ],
    // image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756617720/photo-1523634540939-0be5fba32c8f_uem3hy.jpg",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1758692201/office_stationary_ilt9qe.jpg",
  },
  {
    heading: "Housekeeping Supplies",
    description: "Essential cleaning materials and housekeeping supplies to maintain pristine office environments.",
    points: [
      "Cleaning Liquids",
      "Tissue Papers",
      "Mops & Brooms",
      "Dustbins & Bins",
    ],
    // image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1756617720/photo-1664008760004-182420e58e7c_k4id3q.jpg",
    image: "https://res.cloudinary.com/ddgmru7d1/image/upload/v1758693931/housekeeping_supplies_2_hgevce.jpg",
  },
];

const longTerm = [
  {
    icon: <FaCheck style={{ fontSize: "1em" }} />,
    heading: "One-Stop Solution",
    description: "Everything you need from gifting to stationery to housekeeping - all under one roof.",
  },
  {
    icon: <FaRegEdit style={{ fontSize: "1em" }} />,
    heading: "Full Customization",
    description: "Personalized and branded solutions tailored to your company's unique requirements.",
  },
  {
    icon: <FaRupeeSign style={{ fontSize: "1em" }} />,
    heading: "Competitive Bulk Pricing",
    description: "Cost-effective rates for bulk orders with transparent pricing and no hidden charges.",
  },
  {
    icon: <FaTruckMoving style={{ fontSize: "1em" }} />,
    heading: "Timely Delivery",
    description: "99% on-time delivery record with real-time tracking and reliable logistics partners.",
  },
  {
    icon: <FaHeadset style={{ fontSize: "1em" }} />,
    heading: "Dedicated Support",
    description: "Assigned account managers and 24/7 customer support for seamless service experience.",
  },
  {
    icon: <FaShieldAlt style={{ fontSize: "1em" }} />,
    heading: "Quality Assurance",
    description: "ISO certified processes with rigorous quality checks on all products and services.",
  },
];

const longTerm2 = [
  {
    heading: "500+",
    description: "Corporate Clients",
  },
  {
    heading: "10K+",
    description: "Products Delivered",
  },
  {
    heading: "99%",
    description: "Client Satisfaction",
  },
  {
    heading: "5+",
    description: "Years Experience",
  },
];


export default function Home() {

  const router = useRouter();

  return (
    <section style={{}}>

      <RevealOnScroll>
        <div style={{ background: "linear-gradient(to bottom, #155DFC00, #155DFC00, white)", padding: "4em 0em", }}>

          <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "1em auto", padding: "0em 1em", display: "flex", flexWrap: "wrap", gap: "2em", }}>

            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", flexWrap: "wrap", gap: "1em", flex: "1 1 350px", }}>

              <h1 style={{ fontSize: "3.5rem", fontWeight: "600", lineHeight: "1em", flex: "1 1 auto", marginBottom: "0.35em", }}>CorpSoul, Your Trusted Partner in <span style={{ color: "#155DFC", fontSize: "inherit", fontWeight: "inherit", }}>Corporate Supplies</span> & Gifting</h1>

              <p style={{ color: "grey", fontSize: "1.2em", flex: "1 1 auto", marginBottom: "0.35em", }}>From thoughtful corporate gifts to essential office stationary and reliable housekeeping materials - <span style={{ fontSize: "inherit", fontWeight: "bold", color: "#155DFC", }}>CorpSoul</span> provides comprehensive B2B solutions that strengthen business relationships and enhance workplace efficiency.</p>

              <section style={{ display: "flex", justifyContent: "center", gap: "1em", padding: "2em 0em", flex: "1 1 auto", alignItems: "center", }}>
                <button style={{ display: "flex", alignItems: "center", gap: "1em", backgroundColor: "#155DFC", color: "#FFFFFF", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }} onClick={() => { router.push("/contact") }}>Request a Quote <SlArrowRightCircle /></button>
                <button style={{ display: "flex", alignItems: "center", gap: "1em", backgroundColor: "#FFFFFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", }} onClick={() => { router.push("/services") }}><SlControlPlay /> Explore Services</button>
              </section>

              <section style={{ flex: "1 1 auto", display: "flex", justifyContent: "center", textAlign: "center", gap: "2em", }}>
                {
                  firstRowData.map((item, index) => (
                    <section key={index}>
                      <h2 style={{ fontSize: "1.2em", fontWeight: "bold", color: "#155DFC", }}>{item.heading}</h2>
                      <h4 style={{ lineHeight: "0.9em", fontSize: "0.85em", color: "grey", }}>{item.description}</h4>
                    </section>
                  ))
                }
              </section>
            </div>

            <img
              src={trustedPartner.src}
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
      </RevealOnScroll>

      <RevealOnScroll>
        <div style={{ background: "linear-gradient(to bottom, white, #155DFC00, #155DFC21)", padding: "4em 0em", }}>

          <Heading
            title="Complete B2B Solutions for Your Business"
            description="From corporate gifting to office essentials, we provide end-to-end supply solutions that help businesses build relationships and maintain efficient operations."
          />

          <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "4em auto 2em", }}>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1em", }}>
              {
                minServices.map((item, id) => {
                  return (
                    <section key={id} className="services" style={{ maxWidth: "350px", flex: "1 1 350px", borderRadius: "1em", border: "1px solid lightgray", margin: "0em auto", backgroundColor: "white", }}>

                      <div style={{ width: "348px", height: "150px", borderTopLeftRadius: "1em", borderTopRightRadius: "1em", overflow: "hidden", display: "flex", justifyContent: "center", margin: "0em auto", }}>
                        <img src={item.image} alt={item.heading.replaceAll(" ", "_").toLocaleLowerCase()} style={{ width: "100%", height: "auto", objectFit: "cover", }} />
                      </div>

                      <div style={{ padding: "1em", display: "flex", flexDirection: "column", flex: "1 1 0" }}>

                        <h2 style={{ fontSize: "1.5em", margin: "1em auto", padding: "0em", fontWeight: "bold", }}>{item.heading}</h2>
                        <p style={{ padding: "0.5em 0em", }}>{item.description}</p>
                        <ul style={{ padding: "1em 0em", }}>
                          {
                            item.points.map((point, index) => (
                              <li key={index} style={{ listStyle: "disc", margin: "0.25em 2em", }}>{point}</li>
                            ))
                          }
                        </ul>

                        {/* <div style={{ padding: "1em 0em", display: "flex", justifyContent: "flex-end", }}>
                          <button style={{ display: "flex", placeContent: "center", placeItems: "center", gap: "1em", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", fontWeight: "500", }}>Learn More <SlControlPlay /></button>
                        </div> */}

                      </div>

                    </section>
                  )
                })
              }
            </div>

          </div>

          <div style={{ textAlign: "center", padding: "1em 0em", }}>
            <button
              style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }}
              onClick={() => window.open("https://drive.google.com/file/d/1Jut7bU9YI1aMZG3Vk936SOCZnoZR-NZu/view?usp=sharing", "_blank")}
            >
              Request Detailed Catelogue
            </button>
          </div>

        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div style={{ background: "linear-gradient(to bottom, #155DFC21, #155DFC00, white)", padding: "4em 0em", }}>

          <Heading
            title="Building Long-Term Business Partnerships"
            description="We understand that successful businesses need reliable partners. Here's what makes us the preferred choice for 500+ corporate clients across industries."
          />

          <div style={{ margin: "4em auto", padding: "0em 1em" }}>

            <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "1em auto", display: "flex", flexWrap: "wrap", gap: "2em", justifyContent: "space-between", }}>
              {
                longTerm.map((item, id) => {
                  return (
                    <div key={id} className="services" style={{ border: "1px solid lightgray", padding: "1.5em", borderRadius: "1em", flex: "1 1 auto", maxWidth: "350px", backgroundColor: "white", }}>
                      <RevealOnScroll>
                        <p style={{ display: "inline-block", fontSize: "1.4em", color: "#155DFC", backgroundColor: "#155DFC22", padding: "0.5em", borderRadius: "0.5em" }}>{item.icon}</p>
                        <h1 style={{ fontWeight: "500", padding: "0.5em 0em", }}>{item.heading}</h1>
                        <p style={{ color: "gray" }}>{item.description}</p>
                      </RevealOnScroll>
                    </div>
                  )
                })
              }
            </div>

          </div>

          <div style={{ margin: "0em 1em" }}>

            <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "1em auto", display: "flex", gap: "1em", justifyContent: "space-around", backgroundColor: "white", borderRadius: "1em", border: "1px solid lightgray", }}>
              {
                longTerm2.map((item, index) => {
                  return (
                    <section key={index} style={{ margin: "1em auto", padding: "1em 0em", textAlign: "center", flex: "1 1 0", }}>
                      <RevealOnScroll>
                        <h2 style={{ fontSize: "1.7em", fontWeight: "700", color: "#155DFC", }}>{item.heading}</h2>
                        <h4 style={{ lineHeight: "0.9em", color: "grey", textTransform: "uppercase", }}>{item.description}</h4>
                      </RevealOnScroll>
                    </section>
                  )
                })
              }
            </div>

          </div>

        </div>
      </RevealOnScroll>

    </section >
  );
}