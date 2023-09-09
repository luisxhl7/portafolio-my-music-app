import { REDIRECT_URI, SCOPES, clientId } from "../constants/variables";
import { generateCodeChallenge, generateCodeVerifier } from "../utils/oauthUtils";

const params = new URLSearchParams(window.location.search);
const code = params.get("code");

// Función para redirigir al flujo de autenticación
export const redirectToAuthCodeFlow = async (clientId) => {
  try {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

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

// Función para obtener el token de acceso
export const getAccessToken = async (clientId, code) => {
  try {
    const verifier = localStorage.getItem("verifier");

    const tokenParams = new URLSearchParams();
    tokenParams.append("client_id", clientId);
    tokenParams.append("grant_type", "authorization_code");
    tokenParams.append("code", code);
    tokenParams.append("redirect_uri", REDIRECT_URI);
    tokenParams.append("code_verifier", verifier);

    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: tokenParams,
    });
    
    const { access_token } = await result.json();
    return access_token;
  } catch (error) {
    console.error("Error al obtener el token de acceso:", error);
    // Maneja el error de manera adecuada, por ejemplo, mostrando un mensaje al usuario.
    throw error;
  }
};

// Manejo principal
if (code) {
  (async () => {
    try {
      const accessToken = await getAccessToken(clientId, code);
      window.localStorage.setItem("accessToken", accessToken);
      console.log(accessToken);
    } catch (error) {
      console.error("Error en el manejo principal:", error);
    }
  })();
}
