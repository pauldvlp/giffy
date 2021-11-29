import React, { Suspense } from 'react';
import Loader from './Loader';
import useNearScreen from '../hooks/useNearScreen';

const TrendingSearches = React.lazy(() => {
  return import('./TrendingSearches');
});

const LazyTrendingSearches = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={<Loader />}>
        {isNearScreen ? <TrendingSearches /> : <Loader />}
      </Suspense>
    </div>
  );
};

export default LazyTrendingSearches;
