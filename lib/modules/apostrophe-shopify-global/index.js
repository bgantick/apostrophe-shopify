module.exports = {
  improve: 'apostrophe-global',
  beforeConstruct: (self, options) => {
    options.addFields = [
      {
        name: 'shopifyApiKey',
        label: 'API Key',
        type: 'string',
        required: true
      },
      {
        name: 'shopifyApiPassword',
        label: 'API Password',
        type: 'password',
        required: true
      },
      {
        name: 'shopifySharedSecret',
        label: 'Shared Secret',
        type: 'string',
        required: true
      },
      {
        name: 'shopifyStorefrontAccessToken',
        label: 'Storefront Access Token',
        type: 'string',
        required: true
      },
      {
        name: 'shopifyDomain',
        label: 'Shopify Domain',
        type: 'url',
        required: true
      }
    ].concat(options.addFields || []);
    options.arrangeFields = [
      {
        name: 'shopifySettings',
        label: 'Shopify Settings',
        fields: [
          'shopifyApiKey',
          'shopifyApiPassword',
          'shopifySharedSecret',
          'shopifyStorefrontAccessToken',
          'shopifyDomain'
        ]
      }
    ].concat(options.arrangeFields || []);
  }
};
