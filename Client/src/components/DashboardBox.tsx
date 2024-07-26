import { Box } from "@mui/material";
import { styled } from "@mui/system";


const DashboardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "10px",
  boxShadow: "0.1rem 0.15rem 0.1rem 0.05rem rgba(0, 0, 0, 0.592)"
}))

export default DashboardBox;