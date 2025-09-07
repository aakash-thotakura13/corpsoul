
export default function Heading({ title, description }: { title: React.ReactNode; description: React.ReactNode }) {
  return (
    <section style={{ width: "60%", minWidth: "350px", margin: "0em auto", textAlign: "center", }}>
      <h1 style={{ fontSize: "2em", margin: "0em", padding: "0em", fontWeight: "bold", }}>{title}</h1>
      <h4>{description}</h4>
    </section>
  )
};