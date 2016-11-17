const findAll = store => () => {
  return new Promise((resolve, reject) => {
    store.get('products', (err, products) => {
      if (err) return reject(err)
      resolve(products || [])
    })
  })
}

module.exports = store => ({
  findAll: findAll(store)
})
