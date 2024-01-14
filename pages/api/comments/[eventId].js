import {
  getSpecifiedComments2,
  saveComments2,
} from "../../../helpers/api-util";

function handler(req, res) {
  const eventId = req.query.eventId;
  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }
    const newComment = {
      event_id: eventId,
      email,
      name,
      text,
    };
    saveComments2(newComment);
    console.log(newComment);
    res.status(201).json({ message: "added comment", comment: newComment });
  }
  if (req.method === "GET") {
    getSpecifiedComments2(eventId).then((data) => {
      const commentsList = data.comments2;
      console.log(commentsList);
      res.status(200).json({ comments: commentsList });
    });
  }
}
export default handler;
