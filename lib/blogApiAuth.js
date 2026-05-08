/**
 * Protect mutating blog routes. Set BLOG_API_SECRET in production and send:
 *   Authorization: Bearer <BLOG_API_SECRET>
 */
export function assertBlogWriteAuthorized(req, res) {
  const secret = process.env.BLOG_API_SECRET;
  if (!secret) {
    res.status(503).json({
      error: "Server misconfiguration",
      message: "BLOG_API_SECRET is not set; writes are disabled.",
    });
    return false;
  }

  const header = req.headers.authorization;
  const token = header?.startsWith("Bearer ") ? header.slice(7) : null;

  if (!token || token !== secret) {
    res.status(401).json({ error: "Unauthorized" });
    return false;
  }

  return true;
}
