"use client";
import Link from "next/link";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlPhone, SlPin, SlEnvolope, } from "react-icons/sl";

import logo from "../favicon.ico"


const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const ourServices = [
  {
    name: "Corporate Gifting",
    path: "/corporate-gifting",
  },
  {
    name: "Office Stationary",
    path: "/stationary",
  },
  {
    name: "Housekeeping Supplies",
    path: "/housekeeping",
  },
  {
    name: "Bulk Orders",
    path: "/orders",
  },
  {
    name: "Custom Branding",
    path: "/branding",
  },
];

const socialMediaIcons = [
  { icon: SlSocialFacebook },
  { icon: SlSocialInstagram },
  { icon: SlSocialLinkedin },
  { icon: SlSocialTwitter },
];

export default function FooterComponent() {
  return (
    <footer style={{ backgroundColor: "#101828", color:"whitesmoke" }}>

      <div style={{ maxWidth: "1200px", minWidth: "350px", margin: "0em auto", display: "flex", flexWrap: "wrap", padding: "2em 1em", gap: "1em", alignItems: "flex-start" }}>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>

          <img src={logo.src} alt="logo" style={{ width: "200px", marginBottom: "1em", borderRadius: "1em" }} />

        </div>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>

          <p><strong style={{ display: "block", lineHeight: "2.7em", fontSize: "1.2em" }}>Corpsoul Solutions</strong>Your trusted partner for corporate supplies, gifting solutions, and housekeeping materials. Building lasting business relationships since 2019.</p>

          <section style={{ display: "flex", gap: "1em", padding: "2em 0em" }}>

            {socialMediaIcons.map(({ icon: Icon }, id) => (
              <p
                key={id}
                style={{
                  color: "#101828",
                  backgroundColor: "white",
                  padding: "0.5em",
                  borderRadius: "1em",
                }}
              >
                <Icon style={{ fontSize: "1.5em" }} />
              </p>
            ))}
          </section>

        </div>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", display: "flex", flexDirection: "column", justifyContent: "flex-start", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Quick Links</h2>
          {
            routes.map((route, id) => {
              return (
                <Link key={id} href={route.path} style={{ margin: "0.35em", }}>
                  {route.name}
                </Link>
              )
            })
          }
        </div>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", display: "flex", flexDirection: "column", justifyContent: "flex-start", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Our Services</h2>
          {
            ourServices.map((service, id) => {
              return (
                <Link key={id} href={service.path} style={{ margin: "0.35em", }}>
                  {service.name}
                </Link>
              )
            })
          }
        </div>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", display: "flex", flexDirection: "column", justifyContent: "space-around", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Contact Us</h2>
          <p style={{ paddingBottom: "1em", display: "flex", gap: "1em" }}><SlPhone /> +91 88869 11011</p>
          <p style={{ paddingBottom: "1em", display: "flex", gap: "1em" }}><SlEnvolope />corpsoulsolutions@gmail.com</p>
          <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", maxWidth:"200px", }} onClick={() => window.open("https://wa.me/919999999999", "_blank")}>Get Quote</button>
        </div>

        <div style={{ flex: "1 1 340px", maxWidth: "400px", border: "1px solid black", padding: "10px 7px", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Address</h2>

          <address style={{ marginBottom: "1em", }}>
            <p style={{ fontWeight: "bold", display: "flex", gap: "1em", margin: "0.25em 0em", padding: "0em", }}><SlPin /> <span>Unit #1</span></p>
            H. No. 2-85/1/P-279, Lakshmi Mega Township,
            Ragannaguda, Hyderabad, R.R District.
          </address>

          <address style={{ marginBottom: "1em", }}>
            <p style={{ fontWeight: "bold", display: "flex", gap: "1em", margin: "0.25em 0em", padding: "0em", }}><SlPin /> <span>Unit #2</span></p>
            Flat No: 502, Ashutosh Residency, Anjaneya Nagar Colony,
            Moosapet, Kukatpally,Hyderabad.
          </address>

        </div>

      </div>

    </footer>
  );
}