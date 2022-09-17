const config = {
  SENTRY_DSN:
    "https://1754534f2b114ef1b21277128340dca1@o1403061.ingest.sentry.io/6735626",
  STRIPE_KEY:
    "pk_test_51Lg1KGFYRkDDGL8K4SHbx71z1BsEov211nEoAhEpPpEmXWZ7cZG0bPh2wU84jD75Onn0MHqEYAhyBQK8rwpxqPcR00I8q2jZ3e",
  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
