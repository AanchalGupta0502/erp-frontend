import axios from "axios";

const BASE_URL="https://localhost:8080/api/customers";

export const createCustomer=(data)=> axios.post(BASE_URL,data);
export const getCustomers=()=>axios.get(BASE_URL);
export const getCustomerById=(id)=>axios.get(`${BASE_URL}/${id}`);
export const deleteCustomer=(id)=>axios.delete(`${BASE_URL}/${id}`);