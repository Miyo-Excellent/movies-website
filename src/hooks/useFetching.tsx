import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { QueryFunction } from 'react-query/types/core/types';
import { UseQueryOptions } from 'react-query/types/react/types';
import { Action, Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

export type DispatchCallback = (
  options?: any
) => (dispatch: Dispatch) => Promise<any> | Action<any> | any;

export interface UseFetchingOptions {
  queryOptions?: UseQueryOptions;
  callback: QueryFunction;
  queryName: string;
  action?: DispatchCallback;
  watch?: any[];
}

export const useFetchingDefaultOptions: UseFetchingOptions = {
  queryName: '',
  queryOptions: {},
  callback: async data => data,
  action: undefined,
  watch: []
};

export default function useFetching({
  queryOptions,
  callback,
  queryName,
  action,
  watch = []
}: UseFetchingOptions = useFetchingDefaultOptions) {
  const dispatcher = useDispatch();

  const {
    isLoading = false,
    error = '',
    data: movies = { results: [] }
  }: any = useQuery(queryName, callback, queryOptions);

  useEffect(() => {
    if (action) {
      dispatcher(action({ isLoading, error, movies }));
    }
  }, [movies, ...watch]);
}
