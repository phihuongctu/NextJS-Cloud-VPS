import PropTypes from "prop-types"
import Pagination from "../../components/Dashboard/pagination";
import LayoutDashboard from "/components/Layout/layoutDashboard";
import HeaderDashboard from "../../components/Dashboard/headerDashboard";
import Table from "/components/Table/tableBilling";
import {useState } from "react";
export default function Billing() {
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 4,
    _totalRows: 8,
  })
  const [filters,setFilters]= useState({
    _limit:4,
    _page:1
  })
  function handlePageChange(newPage){
    setPagination({
      _page:newPage,
      _limit: 4,
      _totalRows: 8,
  },
  setFilters({
    ...filters,
    _page:newPage
  })
  
  )}
  return (
    <>
      <HeaderDashboard title="Billing" /> <Table filters={filters} />
      <Pagination pagination={pagination} onPageChange={handlePageChange}  />
    </>
  );
}
Billing.Layout = LayoutDashboard;
