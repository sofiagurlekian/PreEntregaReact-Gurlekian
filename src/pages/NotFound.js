import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect (() => {
     setTimeout (() =>{
        navigate ("/")
     }, 5000)
    },[navigate])

  return (
    <div>
      <h1>Error Page</h1>
      <p>You will be redirected in 5 seconds..</p>
    </div>
  )
}

export default NotFound
