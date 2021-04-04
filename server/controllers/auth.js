export const showMessage = (req, res) => {
  res.status(200).json(`Here is your message: ${req.params.message}`);
};
