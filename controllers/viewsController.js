exports.getIndex = (req, res) => {
  res.status(200).render('apphome', {
    title: `HBD Dashboard`,
  });
};

exports.getSignIn = (req, res) => {
  res.status(200).render('signin', {
    title: `Sign in`,
  });
};

exports.getLanding = (req, res) => {
  res.status(200).render('landing', {
    title: `Welcome to HBD`,
  });
};

exports.upgrade = (req, res) => {
  res.status(200).render('upgrade', {
    title: `Upgrade Account`,
  });
};

exports.blog = (req, res) => {
  res.status(200).render('blog', {
    title: `HBD Blog`,
  });
};
