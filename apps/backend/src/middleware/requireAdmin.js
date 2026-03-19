function requireAdmin(req, res, next) {
  if (!req.user || !req.user.isAdmin) {
    return res.status(403).json({
      error: { code: 'FORBIDDEN', message: 'Admin access required' },
    });
  }
  return next();
}

module.exports = { requireAdmin };
