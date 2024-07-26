// @ts-ignore
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, useTheme } from '@mui/material';
// import PixIcon from '@mui/icons-material/Pix';
import AllInclusiveSharpIcon from '@mui/icons-material/AllInclusiveSharp';
import FlexBetween from '../../components/FlexBetween';

type Props = {};
// @ts-ignore
const NavBar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState('');
  return (
    <FlexBetween
      mb="0.25rem"
      // padding="1rem 1rem" 
      color={palette.grey[300]}
    >
      {/* LEFT SIDE */}
      <FlexBetween gap="0,75rem">
        {/* <PixIcon sx={{ fontSize: "28px" }}/> */}
        <AllInclusiveSharpIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="14px" lineHeight="35px" marginLeft="0.5rem">
          Finansser
        </Typography>
      </FlexBetween>

      {/* RIGHT SIDE */}
      <FlexBetween gap="2rem" >
        <Box sx={{ ":hover": { color: palette.primary[100] }, "gap": "1rem" }} >
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
              // marginLeft:"1rem"
            }}
          >
            dashboard
          </Link>
        </Box>
        <Box sx={{ ":hover": { color: palette.primary[100] }, "gap": "1rem" }} >
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              textDecoration: "inherit",
              // marginLeft:"1rem"
            }}
          >
            predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar;