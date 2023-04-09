import { Request } from './Request';
import Items from './Items';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './error';
import { newSearch } from '../store/searchReducer';
import { useDispatch } from 'react-redux';

export default function SearchPage() {
  const dispatch = useDispatch();
  return (
    <>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => dispatch(newSearch())}>
        <Request />
        <Items />
        </ErrorBoundary>
    </>
  );
}
