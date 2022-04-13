class HomePage {
  static getHomePage(req, res, next) {
    res.render("index", { title: "Express" });
  }
}

module.exports = { HomePage };
