import { saveNewsletterEmail } from "../../helpers/api-util";

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address!" });
      return;
    }
    console.log(userEmail);
    saveNewsletterEmail(userEmail);
    res.status(201).json({ message: "signed up" });
  }
}
export default handler;
