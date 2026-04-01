import Download from "../Schema/download.schema.js";
import { mail } from "../utils/smtp.js";
import download_email from "../utils/emailTemplates/download.js";

export const download_GetAll = async (req, res) => {
  try {
    const download = await Download.find();
    res.status(200).json({ message: "Get all downloads", data: download });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const download_Create = async (req, res) => {
  try {
    const download = new Download(req.body);
    await download.save();
    mail(
      "New Brochure Download from ICABMET-2027",
      download_email(download),
      null,
      "info@icabmet.com"
    );
    res.status(201).json({ message: "Download File successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
