import { Sentry } from "express-mongo-api-setup";
const SentryInit = Sentry.init({
	dsn: process.env.SENTRY_DSN,
});

export default SentryInit;
