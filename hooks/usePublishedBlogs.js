import { useEffect, useState } from "react";

/**
 * Fetches published posts from /api/blogs and returns a window [skip, skip + limit).
 */
export function usePublishedBlogs(limit = 3, skip = 0) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const need = Math.min(skip + limit, 50);

    (async () => {
      try {
        const res = await fetch(`/api/blogs?limit=${need}&page=1`);
        const data = await res.json();
        const all = data.posts || [];
        const slice = all.slice(skip, skip + limit);
        if (!cancelled) setBlogs(slice);
      } catch {
        if (!cancelled) setBlogs([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [limit, skip]);

  return { blogs, loading };
}
