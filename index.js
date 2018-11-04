const storageApi = require('azure-storage');
const RetryFilter = require('./fileDownload');

_retryDownload = new RetryFilter(
  5,
  1000,
  100,
  1000
);

const blobService = storageApi
.createBlobServiceWithSas("")
.withFilter(_retryDownload);
blobService.getBlobToLocalFile(
  "test-container",
  "testFile.log",
  "testFile",
  { maximumExecutionTimeInMs: 10000 },
  err => err ? console.log(err) : console.log("success")
);