const azure_storage = require('azure-storage');

class RetryFilter extends azure_storage.ExponentialRetryPolicyFilter {
  constructor() {
    super(
     5,
      1000,
      100,
      1000
    );
  }

  shouldRetry(statusCode, requestOptions) {
    const retryInfo = super.shouldRetry(statusCode, requestOptions);
    return retryInfo;
  }
}

module.exports = RetryFilter;
