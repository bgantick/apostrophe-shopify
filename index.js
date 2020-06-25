module.exports = {
  moogBundle: {
    modules: [
      'apostrophe-shopify-global',
      'apostrophe-shopify-collections',
      'apostrophe-shopify-products',
      'apostrophe-shopify-products-pages',
      'apostrophe-shopify-products-widgets'
    ],
    directory: 'lib/modules'
  },
  construct: (self, options) => {
    self.addToAdminBar = () => {
      const items = [];
      self.apos.adminBar.add(self.__meta.name + '-sync', 'Shopify Sync');
      items.push(self.__meta.name + '-sync')
      self.apos.adminBar.group({
        label: 'Shopify',
        items: items
      });
    }
    require('./lib/browser.js')(self, options);
    require('./lib/routes.js')(self, options);
  },
  afterConstruct: (self) => {
    self.pushAssets();
    self.addToAdminBar();
    self.pushCreateSingleton();
    self.addRoutes();
  }
};
