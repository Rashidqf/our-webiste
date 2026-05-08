import { listPublishedBlogs } from "./blogQueries";

export async function getBlogListPageProps(context) {
  try {
    const page = Math.max(1, parseInt(context.query.page, 10) || 1);
    const result = await listPublishedBlogs({ page, limit: 9 });
    return {
      props: {
        blogs: result.posts,
        total: result.total,
        totalPages: result.totalPages,
        page: result.page,
        dbError: false,
      },
    };
  } catch (e) {
    console.error("[getBlogListPageProps]", e);
    return {
      props: {
        blogs: [],
        total: 0,
        totalPages: 1,
        page: 1,
        dbError: true,
      },
    };
  }
}
