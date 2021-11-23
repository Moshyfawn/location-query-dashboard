import ky from 'ky';
import { useInfiniteQuery } from 'react-query';
import { useQuery } from 'react-query';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

type GetPostsResponse = Post[];

export const getPosts = (page: number, limit: number) =>
  ky
    .get(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
    )
    .json<GetPostsResponse>();

interface UsePostsOptions {
  page: number;
  limit: number;
}

export default function usePosts(options: UsePostsOptions) {
  const { page, limit } = options;
  const { data } = useQuery(['posts', options], () => getPosts(page, limit));
  // const {} = useInfiniteQuery(['posts'], () => getPosts(), {
  // getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  // });
  return data;
}
