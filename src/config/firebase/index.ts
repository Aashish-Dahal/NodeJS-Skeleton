import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

const app = initializeApp({
  credential: cert(require("../../../serviceAccountKey.json")),
});
export const auth = getAuth(app);
