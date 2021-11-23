import { Link, useNavigate, useSearch } from 'react-location';
import usePosts from '../hooks/usePosts';

const PostsList = () => {
  const { page = 0, limit = 5 } = useSearch();
  const navigate = useNavigate();
  // @ts-ignore
  const posts = usePosts({ page, limit });

  return (
    <section>
      {posts?.map((post) => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </article>
      ))}
      {/* @ts-ignore */}
      <Link search={(currentSearch) => ({ ...currentSearch, page: page - 1 })}>
        Previous
      </Link>
      {/* @ts-ignore */}
      <Link search={(currentSearch) => ({ ...currentSearch, page: page + 1 })}>
        Next
      </Link>
      <input
        type="number"
        // @ts-ignore
        value={limit}
        onChange={(event) =>
          navigate({
            search: (currentSearch) => ({
              ...currentSearch,
              limit: +event.target.value,
            }),
          })
        }
      />
    </section>
  );
};

export default PostsList;
