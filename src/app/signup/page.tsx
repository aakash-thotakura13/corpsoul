import Login from "../components/Login";

export default function SignUp() {

  const user = false;
  if (!user) return <div style={{ margin:"9em auto", }}><Login /></div>;

  return (
    <section>
      <h2>Welcome to your profile dashboard!</h2>
    </section>
  );

}