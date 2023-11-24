import { Stack } from "@mui/material"
import logo from '../assets/logo.png'
import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Navbar = () => (
    <Stack
      direction="row" alignItems="center"
      p={2} 
      sx={{ background: "#000", top: 0, justifyContent: 'space-between', position: 'sticky'}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
        <img 
          src={logo}
          alt="logo"
          height={40}
        />
      </Link>
      <SearchBar />
    </Stack>
)


export default Navbar