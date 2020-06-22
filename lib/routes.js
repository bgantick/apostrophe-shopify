module.exports = function(self, options) {
  self.addRoutes = function() {
    self.route('post', 'sync-modal', (req, res) => {
      if (!req.user) {
        return res.status(404).send('not found');
      }
      return res.send(self.render(req, 'sync-modal.html'));
    });
  };
};
