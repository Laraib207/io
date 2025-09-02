export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    console.log("📩 New contact message:", { name, email, message });

    // TODO: Add email sending (Nodemailer) or database save here
    return res.status(200).json({ success: true });
  }

  res.status(405).json({ error: "Method not allowed" });
}
