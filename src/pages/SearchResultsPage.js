import LoadingLayout from "../components/LoadingLayout";
import ResultsLayout from "../components/ResultsLayout";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";
import Toast from "../components/Toast";

const SearchResultsPage = () => {
  return (
    <div className="md:max-w-[1030px] my-20 px-5 sm:px-6 lg:px-0 overflow-x-hidden md:mx-auto">
      <SearchBar />
      <Toast />
      <LoadingLayout />
      <ResultsLayout>
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
        <SearchCard />
      </ResultsLayout>
    </div>
  );
};

export default SearchResultsPage;
