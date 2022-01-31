import PulseLoader from './PulseLoader';

const LoadingLayout = () => {
  return (
    <div className="flex flex-col mt-4">
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-7">
        <PulseLoader />
        <PulseLoader />
        <PulseLoader />
      </div>
    </div>
  );
};

export default LoadingLayout;
