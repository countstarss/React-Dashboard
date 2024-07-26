# Front End

- Material UI
- TypeScript
- Vite
- Recharts
- Redux
- RTK Query
- Heroicons
- React Router

# Back End

- Node.js
- Express
- body-parser
- cors 跨域
- dotenv 环境变量
- helmet API安全
- morgan 控制台日志
- mongoose 数据库
- mongoose-currency 处理数据
- nodemon  npm i -D nodemon
  // 在最后安装的时候加上参数D，可以精简node_modules
- regression-js for machine learning

# Extensions

- Tailwind shades
- ES7+ React/Redux/React-Native snippets
- Material-UI Snippets
- intend-rainbow
- turbo-consolelog 
  - (ctrl+alt+L / control+commond+L) 输出你选中的变量

# Front-End SetUp Steps

- setup vite.config.ts
- setup .env.local
- setup theme.ts (material theme)
- setup expanded-theme.ts (material theme)


# Usage of Front-End Tools

## 1. styled from @emotion/styled

  - 定义单独的styled组件，存放样式
``` jsx
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const FlexBetween = styled(Box)({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
})
export default FlexBetween;
```
  - 在要用的地方将其作为一个组件引入
      `import FlexBetween from '../../components/FlexBetween';`
  - 像组件一样使用它，里面可以直接写material-ui定义的样式
``` jsx
<FlexBetween 
  mb="0.25rem" 
  p="0.5rem 0rem" 
  color={palette.grey[300]}
>  
</FlexBetween>
```

## usage of material-icon

  - 确保你安装了@mui/icons-material
  - 找到官网，点击你想使用的icon，复制import语句
  - 添加到要使用的地方，然后直接向tsx里添加组件

## usage of styles of @emotion/styled components

  - 如果添加样式的是@emotion/styled components，使用sx={{  }};
  - 如果是普通组件，使用style={{  }}
  - {{  }} 内部样式使用 ":" ，而不是 "="

## usage of grid-template-areas

  - grid-template-areas:
      "a a a a"
      "b b c c"
      "b b c c";
  - grid-template-areas:
      "b b a a"
      "b b c c"
      "b b c c";
  - grid-template-areas:
      "b b · ·"
      "b b c c"
      "· · c c";
``` jsx
import { Box, useTheme } from '@mui/material'

type Props = {}
const gridTemplate = `
  "a b c"
  "a b c"
  "a b c"
  "a e f"
  "d e f"
  "d h f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const DashBoard = (props: Props) => {
  const { palette } = useTheme();
  return (
      <Box
      color={palette.grey[300]}
      width="100%"
      height="100%"
      display="grid"
      gap="1rem"
      sx={{ 
        gridTemplateColumns: "repeat(3,minmax(100px,1fr))",
        gridTemplateRows: "repeat(3,minmax(60px,1fr))",
        gridTemplateAreas:gridTemplate,
      }}
    >
      <Box bgcolor="#fff" gridArea="a"><h1>aaa</h1></Box>
      <Box bgcolor="#fff" gridArea="b"><h1>bbb</h1></Box>
      <Box bgcolor="#fff" gridArea="c"><h1>ccc</h1></Box>
      <Box bgcolor="#fff" gridArea="d"><h1>ddd</h1></Box>
      <Box bgcolor="#fff" gridArea="e"><h1>eee</h1></Box>
      <Box bgcolor="#fff" gridArea="f"><h1>fff</h1></Box>
      <Box bgcolor="#fff" gridArea="g"><h1>ggg</h1></Box>
      <Box bgcolor="#fff" gridArea="h"><h1>hhh</h1></Box>
      <Box bgcolor="#fff" gridArea="i"><h1>iii</h1></Box>
      <Box bgcolor="#fff" gridArea="j"><h1>jjj</h1></Box>
    </Box>
  );
};
export default DashBoard;
```

# Usage of Back-End Tools

## 使用`Mongoose`和`mongoose-currency`创建嵌套的model

``` js
import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
// 使我们可以转换货币类型
loadType(mongoose);

const monthSchema = new Schema(
    {
        month: String,
        revenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        expenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        operationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        nonOperationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
    },
    { toJSON: { getters: true } }
)
const daySchema = new Schema(
    {
        date: String,
        revenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        expenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        operationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        nonOperationalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
    },
    { toJSON: { getters: true } }
)


const KPISchema = new Schema(
    {
        totalProfit:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        totalRevenue:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        totalExpenses:{
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        expensesByCategory:{
            type: Map,
            of :{
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v / 100
            }
        },
        monthlyData:[monthSchema],
        dailyData:[daySchema]
    },
    { toJSON: { getters: true },timestamps:true }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
```

## 自定义滚动条样式

``` css
::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track{
  background-color: #242427;
}
::-webkit-scrollbar-thumb{
  background-color: #242427;
}
::-webkit-scrollbar-track:hover{
  background-color: #48494e;
}
```

