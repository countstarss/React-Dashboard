import DashboardBox from '../../components/DashboardBox'
import { useGetProductsQuery } from '../../state/api'
import { useGetKpisQuery } from '../../state/api'
import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  LineChart,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { useMemo } from 'react'
import { Box, Typography, useTheme } from '@mui/material'
import BoxHeader from '../../components/BoxHeader'
// import { Palette } from '@mui/icons-material'
import FlexBetween from '../../components/FlexBetween'


const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 1000 - 400 },
]

type Props = {}
// @ts-ignore
const Row2 = (props: Props) => {

  const { palette } = useTheme();
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  console.log(`Row 2 data:\n->kpiData : `, kpiData, `\n->productData :     `, productData)

  const pieColors = [palette.primary[700], palette.primary[500]]

  // MARK: - LINE DATA
  const operationalExpenses = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(({ month, operationalExpenses, nonOperationalExpenses }) => {
        return {
          name: month.substring(0, 3),
          Operational: operationalExpenses,
          NonOperational: nonOperationalExpenses,
        }
      })
    )
  }, [kpiData]);


  const pieChartData = useMemo(() => {

    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value
            }
          ]
        }
      )
    }

  }, [kpiData]);

  // MARK: - Product DATA
  const productPriceExpense = useMemo(() => {
    return (
      productData &&
      productData.map(({ price, expense }) => {
        return {
          price: price,
          expense: expense,
        }
      })
    )
  }, [kpiData]);




  return (<>
    {/* 
    // MARK: LINE CHART
    */}
    <DashboardBox gridArea="b">
      <BoxHeader
        title="Operational VS Non-Operational Expenses"
        sidetext="+4%"
      />
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={400}
          data={operationalExpenses}
          margin={{
            top: 20,
            right: -10,
            left: 20,
            bottom: 0,
          }}
        >
          {/* 网格线 */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            style={{ fontSize: "10px" }}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Operational"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="NonOperational"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>


    {/* 
    // MARK: PIE CHART
    */}
    <DashboardBox gridArea="e">
      <BoxHeader
        title="Compaigns & targets"
        sidetext="+12%"
      />
      <FlexBetween>
        <PieChart
          width={110}
          height={100}
          margin={{
            top: 0,
            right: -10,
            left: 0,
            bottom: 0,
          }}
        >
          <Pie
            data={pieData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>
        <Box ml="-0.7rem" flexBasis="40%" textAlign="center">
          <Typography variant="h5">Target Sales</Typography>
          <Typography m="0.3rem 0" variant="h3" color={palette.primary[300]}>
            83
          </Typography>
          <Typography variant="h6">
            Finance goals of the campaign that is desired
          </Typography>
        </Box>
        <Box flexBasis="40%">
          <Typography variant="h5">Losses in Revenue</Typography>
          <Typography variant="h6">Losses are down 25%</Typography>
          <Typography mt="0.4rem" variant="h5">
            Profit Margins
          </Typography>
          <Typography variant="h6">
            Margins are up by 30% from last month.
          </Typography>
        </Box>
      </FlexBetween>
    </DashboardBox>

    {/* 
    // MARK: 3 PIE CHART
    */}
    <DashboardBox gridArea="h">
      <BoxHeader
        title="Expenses By Category"
      />
      <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
        {
          pieChartData?.map((data) =>
            <Box>
              <PieChart
                width={110}
                height={100}
                margin={{
                  top: 0,
                  right: -10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <Pie
                  data={data}
                  innerRadius={18}
                  outerRadius={38}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          )
        }

      </FlexBetween>
    </DashboardBox>


    {/* 
    // MARK: 进度条
    */}
    <DashboardBox gridArea="j">
      <BoxHeader
        title="Overall Sumary"
      />
      <Box
        height="15px"
        margin="1.25rem 1rem 0.4rem 1rem"
        bgcolor={palette.primary[800]}
        borderRadius="1rem"
      >
        <Box
          height="15px"
          bgcolor={palette.primary[600]}
          borderRadius="1rem"
          width="40%"
        ></Box>
      </Box>
      <Typography margin="0 1rem" variant="h6">
        Orci aliquam enim vel diam. Venenatis euismod id donec mus lorem etiam
        ullamcorper odio sed. Ipsum non sed gravida etiam urna egestas
        molestie volutpat et. Malesuada quis pretium aliquet lacinia ornare
        sed. In volutpat nullam at est id cum pulvinar nunc.
      </Typography>

    </DashboardBox>
  </>
  )
}

export default Row2;