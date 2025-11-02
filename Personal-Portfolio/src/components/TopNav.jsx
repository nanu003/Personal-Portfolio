import Button from "./Button"
import {Link, useLocation, useNavigate} from "react-router-dom"

function TopNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" text-black p-8 mt-0 flex justify-between items-center">
      <h1 className="text-lg font-bold text-2xl">
        <img 
  src={import.meta.env.BASE_URL + "chatting.png"} 
  alt="Logo" 
  className="h-12 inline" 
/>
      </h1>
        <div className="space-x-2 flex justify-end p-0">
            <Button onClick={() => navigate("/")} isActive={location.pathname === "/"}>Home</Button>
            <Button onClick={() => navigate("/about")} isActive={location.pathname === "/about"}>About</Button>
            <Button onClick={() => navigate("/skills")} isActive={location.pathname === "/skills"}>Skills</Button>
            <Button onClick={() => navigate("/projects")} isActive={location.pathname === "/projects"}>Projects</Button>
            <Button onClick={() => navigate("/contact")} isActive={location.pathname === "/contact"}>Contact</Button>
        </div>
    </div>
  )
}

export default TopNav
