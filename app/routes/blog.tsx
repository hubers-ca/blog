import { Outlet } from "@remix-run/react";
import { BlogSidebar } from "~/components/blog_sidebar";

const BlogsLayout = () => {
  return (
    <div className="flex flex-row">
      <BlogSidebar />
      <div className="prose prose-lg prose-neutral border-l border-neutral-300 w-full p-6 max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export default BlogsLayout;
