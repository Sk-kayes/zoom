let IS_PROD = true;
const server = IS_PROD ?
    "https://collab-hub-backend.onrender.com" :

    "http://localhost:8000"


export default server;