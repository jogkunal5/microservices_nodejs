const { ProductRepository } = require("../database");
const { FormateData } = require("../utils");

// All Business logic will be here
class ProductService {
  constructor() {
    this.repository = new ProductRepository();
  }

  async CreateProduct(productInputs) {
    try {
      const productResult = await this.repository.CreateProduct(productInputs);
      return FormateData(productResult);
    } catch (err) {
      throw new APIError("CreateProduct: Data not found", err);
    }
  }

  async GetProducts() {
    try {
      const products = await this.repository.Products();

      let categories = {};

      products.map(({ type }) => {
        categories[type] = type;
      });

      return FormateData({
        products,
        categories: Object.keys(categories),
      });
    } catch (err) {
      throw new APIError("GetProduct: Data not found", err);
    }
  }

  async GetProductDescription(productId) {
    try {
      const product = await this.repository.FindById(productId);
      return FormateData(product);
    } catch (err) {
      throw new APIError("GetProductDescription: Data not found", err);
    }
  }

  async GetProductsByCategory(category) {
    try {
      const products = await this.repository.FindByCategory(category);
      return FormateData(products);
    } catch (err) {
      throw new APIError("GetProductByCategory: Data not found", err);
    }
  }

  async GetSelectedProducts(selectedIds) {
    try {
      const products = await this.repository.FindSelectedProducts(selectedIds);
      return FormateData(products);
    } catch (err) {
      throw new APIError("findSelectedProduct: Data not found", err);
    }
  }

  async GetProductById(productId) {
    try {
      return await this.repository.FindById(productId);
    } catch (err) {
      throw new APIError("GetProductById: Data not found", err);
    }
  }

  async GetProductPayload(userId, { productId, qty }, event) {
    try {
      const product = await this.repository.FindById(productId);
      if (product) {
        const payload = {
          event: event,
          data: { userId, product, qty },
        };

        return FormateData(payload);
      } else {
        return FormateData({ error: "No product Available" });
      }
    } catch (err) {
      throw new APIError("GetProductPayload: Data not found", err);
    }
  }
}

module.exports = ProductService;
