import { BaseApi } from "./BaseApi"

const LoginUser = (username, password) => BaseApi.post("auth/login", { username: username, password: password })

const getCategories = () => BaseApi.get("products/categories",);

const getProduct = () => BaseApi.get("products",);

const singleProduct = (id) => BaseApi.get(`products/${id}`,);

const relatedProducts = (category) => BaseApi.get(`products/category/${category}`,);




export default {
    LoginUser,
    getCategories,
    getProduct,
    singleProduct,
    relatedProducts
}

