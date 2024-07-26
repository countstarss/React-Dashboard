import DashboardBox from '../../components/DashboardBox'
import BoxHeader from '../../components/BoxHeader'
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import { useGetKpisQuery, useGetTransactionsQuery, useGetProductsQuery } from '../../state/api'
import { useMemo } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle
} from "recharts"
import { Box, useTheme } from '@mui/material'



const Row3 = () => {

  const { palette } = useTheme();
  //MARK: FETCH DATA
  const { data: kpiData } = useGetKpisQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  const { data: productData } = useGetProductsQuery();

  // MARK: useMemo
  const revenue = useMemo(() => {
    return (
      kpiData &&
      kpiData[0].monthlyData.map(({ month, revenue, expenses }) => {
        return {
          name: month.substring(0, 3),
          revenue: revenue,
          expenses: expenses
        }
      })
    )
  }, [kpiData]);

  // MARK: COLUMN
  const productColumns = [
    {
      field: 'id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'expense',
      headerName: 'Expense',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'price',
      headerName: 'Price',
      flex: 0.5,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
  ]

  const transactionColumns = [
    {
      field: '_id',
      headerName: 'ID',
      flex: 1
    },
    {
      field: 'buyer',
      headerName: 'Buyer',
      flex: 0.67,
    },
    {
      field: 'amount',
      headerName: 'Amount',
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: 'productIds',
      headerName: 'productId',
      flex: 0.35,
      // @ts-ignore
      renderCell: (params: GridCellParams) => `${params.value.length}`,
    },
  ]



  return (<>
    {/* 
    // MARK:REVENUE CHART
     */}
    <DashboardBox gridArea="c">
      <BoxHeader
        title="Revenue Month By Month"
        subtitle="top line revenue,bottom line expenses"
        sidetext="+4%"
      />
      <ResponsiveContainer maxHeight={230} height="80%" width="100%">
        <BarChart
          width={500}
          height={300}
          data={revenue}
          margin={{
            top: 15,
            right: 15,
            left: -5,
            bottom: -5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="revenue" fill="url(#colorRevenue)" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        </BarChart>
      </ResponsiveContainer>
    </DashboardBox>

    {/* 
    // MARK: PRODUCT LIST
    */}
    <DashboardBox gridArea="f">
      <BoxHeader
        title="List of Products"
        sidetext={`${productData?.length} products`}
      />
      <Box
        mt={"0.5rem"}
        maxHeight="260px"
        mb={"-1rem"}
        sx={{
          height: '80%',
          width: '100%',
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none"
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={30}
          rowHeight={35}
          hideFooter={true}
          rows={productData || []}
          columns={productColumns}
          initialState={{
            pagination: {
              paginationModel: {
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </DashboardBox>

    {/* 
    // MARK: TRANSACTION LIST
    */}
    <DashboardBox gridArea="i">
      <BoxHeader
        title="List of Transactions"
        sidetext={`${transactionData?.length} Transactions`}
      />
      <Box
        mt={"0.5rem"}
        maxHeight="280px"
        mb={"-1rem"}
        sx={{
          height: '80%',
          width: '100%',
          "& .MuiDataGrid-root": {
            color: palette.grey[300],
            border: "none"
          },
        }}
      >
        <DataGrid
          columnHeaderHeight={30}
          rowHeight={35}
          hideFooter={true}
          rows={transactionData || []}
          columns={transactionColumns}
          initialState={{
            pagination: {
              paginationModel: {
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </DashboardBox>
  </>
  )
}

export default Row3;