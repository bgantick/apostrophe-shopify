apos.define('apostrophe-shopify', {
  extend: 'apostrophe-context',
  afterConstruct: function(self) {
    self.enableSyncModal();
  },
  construct: function(self, options) {
    self.enableSyncModal = function() {
      apos.adminBar.link('apostrophe-shopify-sync', function() {
        self.launchSyncModal();
      });
    };
    self.launchSyncModal = function() {
      return apos.create('apostrophe-shopify-sync-modal', options);
    };
  }
});
