module.exports = (req, res, next) => {
  const isAdmin = req.session?.isAdmin;
  if (!isAdmin) {
    res.redirect('/');
  } else {
    next();
  }
};
