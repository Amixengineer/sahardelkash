module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6c01f55a5affe600f68f0998d80d885c'),
  },
});
