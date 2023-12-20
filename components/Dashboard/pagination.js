import PropTypes from "prop-types"
import { changePagination } from "../../pages/dashboard/billing";
Pagination.propTypes={
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func
};
Pagination.defaultProps ={
  onPageChange:null,
}
export default function Pagination({pagination , onPageChange}) {
  const { _page, _limit, _totalRows} = pagination;
  const totalPages = Math.ceil(_totalRows /_limit);
  
  function handlePageChange(newPage){
    if(onPageChange){
      onPageChange(newPage);      
    }
  }
  return (
    <>
      <div className="flex justify-center mt-4 flex-wrap ">
        <button disabled={_page===1} onClick={()=> handlePageChange(_page-1)}>
           <a        
          className={`flex items-center px-4 py-2 mx-1 mt-2 text-gray-700 bg-gray-100 rounded-md  dark:bg-gray-500 hover:bg-blue-500 dark:text-white ${_page===1?"cursor-not-allowed opacity-50":""}`}
        >
          Previous
        </a> 
        </button>
        <button disabled={_page===1} onClick={()=> handlePageChange(1)}>
          <a          
          className={`flex items-center px-4 py-2 mx-1 mt-2 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-md hover:bg-blue-600  dark:bg-gray-500 dark:text-gray-200 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${_page===1?" bg-blue-700 text-white":""}`}
        >
          1
        </a>
        </button>
        <button disabled={_page===2} onClick={()=> handlePageChange(2)}>
          <a            
          className={`flex items-center px-4 py-2 mx-1 mt-2 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-md dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${_page===2?"bg-blue-700 text-white":""}`}
        >
          2
        </a>
        </button>
        <button disabled={_page===totalPages} onClick={()=> handlePageChange(_page + 1)}>
           <a 
          
          className={`flex items-center px-4 py-2 mx-1 mt-2 text-gray-700 transition-colors duration-200 transform bg-gray-100 rounded-md 
          dark:bg-gray-500 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 ${_page===totalPages?"cursor-not-allowed opacity-50":""}`}
          
        >
          Next
        </a>
        </button>
       
      </div>
    </>
  );
}
