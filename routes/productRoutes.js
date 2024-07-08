const router = require('express').Router()
const productControllers = "../controllers/productControllers"

//create
router.post('/' , productControllers.createProduct)

// Get
router.get('/' , productControllers.getallProducts)

// Get by id
router.get('/:id' , productControllers.getById)

// put
router.put('/:id' , productControllers.updateProduct)

// Delete
router.delete('/:id', productControllers.deleteProduct)
