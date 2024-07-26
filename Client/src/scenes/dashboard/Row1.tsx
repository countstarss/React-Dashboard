import DashboardBox from '../../components/DashboardBox'
import { useGetKpisQuery } from '../../state/api'
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  Line,
  LineChart,
  Legend,
} from "recharts"
import { useMemo } from 'react'
import { useTheme } from '@mui/material'
import BoxHeader from '../../components/BoxHeader'


type Props = {}
// @ts-ignore
const Row1 = (props: Props) => {
  const { palette } = useTheme();

  const { data } = useGetKpisQuery();
  console.log("TCL: data", data)
  //MARK: CHARTS 1 DATA
  const revenueExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses
        }
      })
    )
  }, [data]);
  //MARK: CHARTS 2 DATA
  const profitExpenses = useMemo(() => {
    return (
      data &&
      data[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          profit: (revenue - expenses).toFixed(2),
        }
      })
    )
  }, [data]);

  return (<>
    <DashboardBox gridArea="a">
      <BoxHeader
        title="Revenue & Expenses"
        subtitle="top line revenue,bottom line expenses"
        sidetext="+4%"
      />
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={revenueExpenses}
          margin={{
            top: 15,
            right: 15,
            left: -12,
            bottom: 0,
          }}
        >
          {/* 网格线 */}
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            tickLine={false}
            style={{ fontSize: "10px" }}
          />
          <YAxis
            tickLine={false}
            style={{ fontSize: "10px" }}
            domain={[8000, 23000]}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            stroke={palette.primary.main}
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </DashboardBox>

    <DashboardBox gridArea="d">
      <BoxHeader
        title="Profit & Revenue"
        subtitle="top line revenue,bottom line expenses"
        sidetext="+4%"
      />
      <ResponsiveContainer width="100%" height="80%">
        <LineChart
          width={500}
          height={400}
          data={profitExpenses}
          margin={{
            top: 15,
            right: 15,
            left: -10,
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
            tickLine={false}
            axisLine={{ strokeWidth: "0" }}
            style={{ fontSize: "10px" }}
          // domain={[8000,23000]}
          />
          <Tooltip />
          {/* 表格下面表示线的颜色 */}
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#82ca9d"
          />
        </LineChart>
      </ResponsiveContainer>
    </DashboardBox>
  </>
  )
}

export default Row1;