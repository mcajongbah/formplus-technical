import { useEffect, useState } from "react";
import LoadingLayout from "../components/LoadingLayout";
import ResultsLayout from "../components/ResultsLayout";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";
import Toast from "../components/Toast";
import { useFetch } from "../hooks/useFetch";
import Pagination from "../components/Pagination";

const SearchResultsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(null);
  const [category, setCategory] = useState("All");

  const { data, error, loading } = useFetch(
    `https://front-end-task-dot-result-analytics-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates`
  );

  
  useEffect(() => {
    const numberPerPage = 30;
    const indexOfLastItem = currentPage * numberPerPage;
    const indexOfFirstItem = indexOfLastItem - numberPerPage;
    if (data) {
      setNumberOfPages(Math.ceil(data.length / numberPerPage));
      setSearchResults(data.slice(indexOfFirstItem, indexOfLastItem));
    }
  }, [data, currentPage]);

  // const sortIt = (sortBy) => (a, b) => {
  //   if (a[sortBy] > b[sortBy]) {
  //     return 1;
  //   } else if (a[sortBy] < b[sortBy]) {
  //     return -1;
  //   }
  //   return 0;
  // };

  // change page
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="md:max-w-[1030px] lg:max-w-[1150px] my-20 px-5 sm:px-6 lg:px-10 overflow-x-hidden md:mx-auto">
      <SearchBar setCategory={setCategory} />
      <Toast />
      {loading && <LoadingLayout />}
      {error && (
        <div className="w-full text-center text-red-700 mt-4">{error}</div>
      )}
      {!loading && !error && data && (
        <>
          <ResultsLayout data={data} category={category} >
            {searchResults.map((item) => (
              <SearchCard key={item.created} item={item} />
            ))}
          </ResultsLayout>
          <Pagination currentPage={currentPage} prevPage={prevPage} nextPage={nextPage} numberOfPages={numberOfPages} />
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
