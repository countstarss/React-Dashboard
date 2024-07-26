// import { useState } from 'react'
import { Box, useMediaQuery, useTheme } from '@mui/material'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';


const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"a e f"
"d e f"
"d h i"
"d h i"
"d j i"
"d j i"
`;
const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"a"
"d"
"d"
"d"
"d"
"d"
"b"
"b"
"b"
"e"
"e"
"h"
"h"
"j"
"j"
"c"
"c"
"c"
"f"
"f"
"f"
"i"
"i"
"i"
`;

type Props = {}
// @ts-ignore
const DashBoard = (props: Props) => {
  // 响应式布局
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)")
  const { palette } = useTheme();
  return (
    <Box
      color={palette.grey[300]}
      width="100%"
      height="100%"
      display="grid"
      gap="1rem"
      sx={
        isAboveMediumScreens ? {
          gridTemplateColumns: "repeat(3,minmax(100px,1fr))",
          gridTemplateRows: "repeat(minmax(600px))",
          gridTemplateAreas: gridTemplateLargeScreens,
        } : {
          gridAutoColumns: "minmax(550px,1200px)",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmallScreens,
        }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
};
export default DashBoard;