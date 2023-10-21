import { REDIRECT_URI, SCOPES } from "../constants/variables";
import { generateCodeChallenge, generateCodeVerifier } from "../utils/oauthUtils";

// Función para redirigir al flujo de autenticación
export const redirectToAuthCodeFlow = async (clientId) => {
  try {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    sessionStorage.setItem("verifier", verifier);

    const authParams = new URLSearchParams();
    authParams.append("client_id", clientId);
    authParams.append("response_type", "code");
    authParams.append("redirect_uri", REDIRECT_URI);
    authParams.append("scope", SCOPES);
    authParams.append("code_challenge_method", "S256");
    authParams.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${authParams.toString()}`;
  } catch (error) {
    console.error("Error al redirigir al flujo de autenticación:", error);
  }
};
