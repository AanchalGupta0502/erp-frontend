import axios from "axios"
const BASE_URL="https://erp-backend-springboot-1.onrender.com/api/customerReport"
//const BASE_URL="http://localhost:8080/api/customerReport"

export const getCustomerByAroma=(aroma)=>axios.get(`${BASE_URL}/${aroma}`);
export const getCustomerByAromaPDF=(aroma)=>axios.get(`${BASE_URL}/export/pdf/${aroma}`, { responseType: 'blob' });