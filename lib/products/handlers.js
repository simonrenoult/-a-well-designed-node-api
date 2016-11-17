exports.findAll = (req, res) => {
  return req.services.products.findAll().then(products => {
    res.send(products)
  })
}
