const _ = require('lodash');

module.exports = {
  name: 'apostrophe-shopify-products',
  label: 'Product',
  extend: 'apostrophe-pieces',
  construct: (self, options) => {
    self.addToAdminBar = () => {
      self.apos.adminBar.add(self.__meta.name, 'Manage Products');
      const group = _.find(self.apos.adminBar.groups, { label: 'Shopify' });
      if (group) {
        group.items.push(self.__meta.name);
      }
    }
  }
};
