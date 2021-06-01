import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    jwt: async (token, user, account, profile, profileUrl, isNewUser) => {
      //  "user" parameter is the object received from "authorize"
      //  "token" is being send below to "session" callback...
      //  ...so we set "user" param of "token" to object from "authorize"...
      //  ...and return it...
      user && (token.user = user);
      profile && (token.profile = profile);
      profileUrl && (token.profileUrl = profileUrl);
      return Promise.resolve(token, profile, profileUrl); // ...here
    },
    session: async (session, user, profile, profileUrl, sessionToken) => {
      //  "session" is current session object
      //  below we set "user" param of "session" to value received from "jwt" callback
      session.user = user.user;
      session.profile = user.profile;
      session.profileUrl = user.profileUrl;
      return Promise.resolve(session);
    },
  },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});
