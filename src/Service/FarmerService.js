import axios from 'axios';

const API_BASE_URL = "http://localhost:7777/api/product";

class FarmerService {

    getUser(){
        return axios.get(API_BASE_URL);
    }
  
     addProduct(product){
        return axios.post(API_BASE_URL +'/addProduct',product);
    }
}

export default new FarmerService()