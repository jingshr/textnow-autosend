module.exports = {
  username: process.env.TEXTNOW_USERNAME || "",
  password: process.env.TEXTNOW_PASSWORD || "",
  recipient: process.env.TEXTNOW_RECIPIENT || "(516) 855-5259",
  message: process.env.TEXTNOW_MESSAGE || "autosend message",
};
