// MARK: - ExpensesByCategory
export interface ExpensesByCategory {
    salaries: number;
    services: number;
    supplies: number;
}
// MARK: - Day
export interface Day {
    id: string;
    _id: string;
    date: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
}
// MARK: - Month
export interface Month {
    id: string;
    _id: string;
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
}

// MARK: - GetKpis
export interface GetKpisResponse {
    id: string;
    _id: string;
    __v: number;

    totalProfit: number;
    totalExpenses: number;
    totalRevenue: number;
    expensesByCategory: ExpensesByCategory;
    dailyData: Array<Day>;
    monthlyData: Array<Month>;
    createdAt: string;
    updatedAt: string;
}
// MARK: - ===========



// MARK: - GetProducts
export interface GetProductsResponse {
    id: string;
    _id: string;
    __v: number;

    price: number;
    expense: number;
    transactions: Array<string>;
    createdAt: string;
    updatedAt: string;
}
// MARK: - ===========



// MARK: - GetTransactions
export interface GetTransactionsResponse {
    id: string;
    _id: string;
    __v: number;

    buyer: string;
    amount: number;
    productIds: Array<string>;
    createdAt: string;
    updatedAt: string;
}