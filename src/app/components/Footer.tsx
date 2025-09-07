import Link from "next/link";
import TempLogo from "./reusable/TempLogo";
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlPhone, SlPin, SlEnvolope, } from "react-icons/sl";


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
  {
    name: ".",
    path: "/",
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

export default function FooterComponent() {
  return (
    <section style={{ backgroundColor: "#101828", color: "#FFFFFF", }}>

      <div style={{ width: "85%", margin: "0em auto", display: "flex", flexWrap: "wrap", padding: "2em 0em", gap: "1em", }}>

        <div style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
          <div style={{ paddingBottom: "1em", }}><TempLogo /></div>

          <p>Your trusted partner for corporate supplies, gifting solutions, and housekeeping materials. Building lasting business relationships since 2019.</p>

          <section style={{ display: "flex", gap: "1em", padding: "2em 0em", }}>
            {
              [
                <SlSocialFacebook style={{ fontSize: "1.5em", }} />, <SlSocialInstagram style={{ fontSize: "1.5em", }} />,
                <SlSocialLinkedin style={{ fontSize: "1.5em", }} />, <SlSocialTwitter style={{ fontSize: "1.5em", }} />,
              ].map((item, id) => <p key={id} style={{ color: "#101828", backgroundColor: "white", padding: "0.5em", borderRadius: "1em" }}>{item}</p>)
            }
          </section>

        </div>

        <div style={{ flex: "1 1 200px", padding: "10px 0em", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Quick Links</h2>
          {
            routes.map((route, id) => {
              return (
                <Link key={id} href={route.path} style={{ display: "grid", }}>
                  {route.name}
                </Link>
              )
            })
          }
        </div>

        <div style={{ flex: "1 1 200px", padding: "10px 0em", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Our Services</h2>
          {
            ourServices.map((service, id) => {
              return (
                <Link key={id} href={service.path} style={{ display: "grid", }}>
                  {service.name}
                </Link>
              )
            })
          }
        </div>

        <div style={{ flex: "1 1 200px", padding: "10px 0em", display: "flex", flexDirection: "column", justifyContent: "space-between", }}>
          <h2 style={{ paddingBottom: "1em", fontWeight: "bold", }}>Contact Us</h2>
          <p style={{ display: "flex", gap: "1em" }}><SlPhone /> +91 8886911011</p>
          <p style={{ display: "flex", gap: "1em" }}><SlEnvolope />corpsoulsolutions@gmail.com</p>
          <p style={{ display: "flex", gap: "1em" }}><SlPin />Hyderabad, Telangana, India</p>
          <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }}>Get Quote</button>

        </div>

      </div>

    </section>
  );
}