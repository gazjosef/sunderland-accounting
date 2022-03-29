import Head from "next/head";

export const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />

      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Sunderland Accounting",
  keywords:
    "Accounts Payable, Accounts Receivable, Audit Controls, Balance Sheet, Benefits Administration, Billing, Budgeting and Cash Flow, Business Plan, Capital Budget, Cash Management, Collections, Contract Management, Corporate Governance, Cost Accounting, Cost Reduction & Avoidance, Credit Management, Debt Refinancing, EBITDA, Financial Planning, Financial Statements, Forecasting, Foreign Exchange, GAAP, General Accounting, General Ledger, IFRS, Internal Controls, Inventory Management, Investment Finance, Investor Relations, IPO, Job Costing, Letter of Credit, Management Reporting, Mergers & Acquisitions, Payroll Administration, Policies & Procedures, Quarterly / Year-End Reporting, Reconciliation, Relationship Management, Reporting & Analysis, Reverse Takeover, Risk Management, ROE / ROI / ROA, Sarbanes Oxley, Taxation, Treasury, Variance Analysis",
  description: "Sunderland Accounting Website",
};
