import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { BlogSidebar } from "~/components/blog_sidebar";
import { createReader } from "@keystatic/core/reader";
import config from "../../keystatic.config";
import { json } from "@remix-run/node";

const loader = async () => {
  const reader = createReader(process.cwd(), config);
  const mathPosts = await reader.collections.math.all();
  const codePosts = await reader.collections.code.all();
  // console.log(mathPosts, codePosts);
  // console.log(process.env);

  return json({
    mathPosts,
    codePosts,
  });
};

const BlogsLayout = () => {
  const { mathPosts, codePosts } = useLoaderData<typeof loader>();
  // console.log(mathPosts, codePosts);

  return (
    <div className="flex flex-row">
      <ul>
        <li>
          <h5>Math</h5>
        </li>
        {mathPosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
        <li>
          <h5>Code</h5>
        </li>
        {codePosts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
      <BlogSidebar />
      <div className="prose prose-lg prose-neutral border-l border-neutral-300 w-full p-6 max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export { loader };
export default BlogsLayout;
