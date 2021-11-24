const database = require("./dbQuery");

function findAll(callback) {
  const selectProducts = "SELECT * from article; ";
  database.getResult(selectProducts, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      console.log(err);
      throw err;
    }
  });
}

function findByID(reference, callback) {
  const selectProducts = `SELECT * from article where reference like '${reference}';`;
  console.log(selectProducts);
  database.getResult(selectProducts, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      console.log(err);
      throw err;
    }
  });
}

function findByCategory(category, callback) {
  const selectProducts = `SELECT * from article where category like '${category}';`;
  database.getResult(selectProducts, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      console.log(err);
      throw err;
    }
  });
}

function findBySupplier(supplier, callback) {
  const selectProducts = `SELECT * from article where supplier like '${supplier}';`;
  database.getResult(selectProducts, function (err, rows) {
    if (!err) {
      callback(null, rows);
    } else {
      console.log(err);
      throw err;
    }
  });
}

function getSupplierName(id, callback) {
  const selectProducts = `SELECT * from supplier where num like '${id}';`;
  database.getResult(selectProducts, function (err, rows) {
    if (!err) {
      console.log("!!! " + rows + " !!!");
      callback(null, rows);
    } else {
      console.log(err);
      throw err;
    }
  });
}

module.exports = {
  findAll,
  findByID,
  findByCategory,
  findBySupplier,
  getSupplierName
};
