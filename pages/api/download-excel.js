
export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="real_estate_data.xlsx"');
  res.end('This would be binary excel content.');
}
