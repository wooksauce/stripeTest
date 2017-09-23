const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_live_MY_PUBLISHABLE_KEY'
  : 'pk_test_BtldIkOgEzoxf2fN7T8fxsMO';

export default STRIPE_PUBLISHABLE;