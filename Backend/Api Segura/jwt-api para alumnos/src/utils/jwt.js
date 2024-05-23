import jwt from "jsonwebtoken";

//firma y verifica el token para autenticación JWT
const tokenSign = async (user, rolUser) => {
  const token = await jwt.sign(
    {
      usuario: user,
      rol: rolUser,
    },
    "apisegura" /* Esta es la palabra clave */,
    { expiresIn: "1h" }
  );
  return token;
};

const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, "apisegura");
    return decoded;
  } catch (error) {
    return null;
  }
};

export { tokenSign, verifyToken };
