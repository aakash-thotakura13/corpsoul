import { SlControlPlay } from "react-icons/sl";
import Heading from "../components/reusable/Heading"

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


export default function Services() {
  return (
    <section style={{ maxWidth: "1200px", minWidth: "350px", margin: "4em auto" }}>

      <div style={{ padding: "1em 0em", }} >

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

                      <div style={{ padding: "1em 0em", display: "flex", justifyContent: "flex-end", }}>
                        <button style={{ display: "flex", placeContent: "center", placeItems: "center", gap: "1em", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", fontWeight: "500", }}>Learn More <SlControlPlay /></button>
                      </div>

                    </div>

                  </section>
                )
              })
            }
          </div>

        </div>

        <div style={{ textAlign: "center", padding: "1em 0em", }}>
          <button style={{ backgroundColor: "#155DFC", color: "#ffffff", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", }}>Request Detailed Catelogue</button>
        </div>

      </div>

      <div style={{ backgroundColor: "#155DFC22", borderRadius: "1em", margin: "4em 0em", padding: "2em", }}>

        <h2 style={{ fontSize: "1.45em", fontWeight: "bold", textAlign: "center", }}>Need a Custom Solution?</h2>
        <p style={{ textAlign: "center", }}>We understand that every business has unique requirements. Contact us to discuss how we can create a tailored supply solution that meets your specific needs.</p>

        <section style={{ maxWidth: "350px", margin: "1em auto", display: "flex", flexWrap: "wrap", gap: "1em", padding: "1em 0em", flex: "1 1 auto", alignItems: "center", justifyContent: "center", }}>
          <button style={{ backgroundColor: "#155DFC", color: "#FFFFFF", border: "1px solid #155DFC", padding: "0.5em 1em", borderRadius: "0.5em", flex: "1 1 auto", }}>Call: +91 8XXXXXXXXX</button>
          <button style={{ backgroundColor: "#FFFFFF", color: "#191919", border: "1px solid lightgray", padding: "0.5em 1em", borderRadius: "0.5em", flex: "1 1 auto", }}>Request Custom Quote</button>
        </section>

      </div>

    </section>
  )
};