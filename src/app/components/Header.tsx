import Link from "next/link";
import TempLogo from "./reusable/TempLogo";
import { SlPhone, SlEnvolope, } from "react-icons/sl";


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


export default function HeaderComponent() {
  return (
    <section style={{ width: "85%", margin: "0em auto", }}>

      <section style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "1em", margin: "0.4em 0em 0em", }}>
        <small style={{ display: "flex", alignItems: "center", gap: "0em 1em", fontSize: "0.9em", color: "grey" }}><SlPhone /> +91 8886911011</small>
        <small style={{ display: "flex", alignItems: "center", gap: "0em 1em", fontSize: "0.9em", color: "grey" }}><SlEnvolope />corpsoulsolutions@gmail.com</small>
      </section>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: "0", flexWrap: "wrap", }}>

        <TempLogo />

        <nav style={{ flex: "1 1 auto", }}>
          <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0em 5em", listStyle: "none", flexWrap: "wrap", }}>
            {routes.map((route) => (
              <Link key={route.name} href={route.path} style={{ flex: "1 1 auto", }} >
                {route.name}
              </Link>
            ))}
          </ul>
        </nav>

        <section style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "1em", flex: "1 1 auto", }}>
          <button style={{ backgroundColor: "#FFFFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", }}>Request Quote</button>
          <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }}>Get Started</button>
        </section>

      </div>
    </section>
  );
}