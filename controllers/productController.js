const getCatalogue = (request, response) => {
  const catalogServices = require("../services/productServices");
  catalogServices.searchService(function (err, rows) {
    response.render("catalogue", { products: rows, title: "All Products" });
  });
};

const getProductByID = (request, response) => {
  const catalogServices = require("../services/productServices");
  let reference = request.params.id;
  console.log(reference);
  catalogServices.searchIDService(reference, function (err, rows) {
    if (rows === null) {
      response.render("error", { code: 500 });
    } else {
      response.render("article", { product: rows });
    }
  });
};

const getProductsByCategory = (request, response) => {
  const catalogServices = require("../services/productServices");
  let category = request.params.category;
  catalogServices.searchCategoryService(category, function (err, rows) {
    if (rows === null) {
      response.render("error", { code: 404 });
    } else {
      response.render("catalogue", { products: rows, title: category });
    }
  });
};

const getProductsBySupplier = (request, response) => {
  const catalogServices = require("../services/productServices");
  let supplier = request.params.id;
  catalogServices.searchSupplierService(supplier, function (err, rows) {
    if (rows === null) {
      response.render("error", { code: 404 });
    } else {
      response.render("catalogue", {
        products: rows,
        title: "Products from Supplier: " + supplier
      });
    }
  });
};

module.exports = {
  getCatalogue,
  getProductByID,
  getProductsByCategory,
  getProductsBySupplier
};
