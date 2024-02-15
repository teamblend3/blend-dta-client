const extractUserInfo = ({
  user: { email, displayName, photoURL, uid },
  _tokenResponse: { oauthAccessToken, refreshToken: oauthRefreshToken },
}) => ({
  email,
  displayName,
  photoURL,
  uid,
  oauthAccessToken,
  oauthRefreshToken,
});

export default extractUserInfo;
