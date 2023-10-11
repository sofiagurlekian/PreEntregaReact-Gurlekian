import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => navigate ("/")}>Back to Home Page!</button>
    </div>
  )
}

export default Contact
