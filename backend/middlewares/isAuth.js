import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  try {
    let { token } = req.cookie;
    if (!token) {
      return res.status(400).json({ message: "user does not have a token" });
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res
        .status(400)
        .json({ message: "user does not have a verified token" });
    }
    req.userId = verifyToken.userId;
    next();
  } catch (error) {
    return res.status(500).json({ message: `is auth error ${error}` });
  }
};

export default isAuth;
