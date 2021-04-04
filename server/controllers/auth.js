export const showMessage = (req, res) => {
  console.log(req.params);
  res.status(200).json(`Here is your message: ${req.params.message}`);
};
