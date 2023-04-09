import axios from 'axios';
import { RequestType } from '../types';

const MAX_RESULTS = 10;
//const KEY1 = 'AIzaSyCYA3KyhuvIObcdVVCPbt6MfQ1LgKXIfxY';
const KEY = 'AIzaSyAYPVByWgr_Zr80JwyqpK1pNGxxpPmRAS4';

const getBooks = async ({query, orderBy, startIndex}: RequestType) => {
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${KEY}`;
    console.log('BASEURL', BASEURL);
    try {
      const response = await axios.get(BASEURL);
      if (response.status !== 200) {
        throw new Error('Error from api')
      }
      console.log('response', response);
      const {totalItems, items } = response.data;
      return {totalItems, items };
    }
    catch(e) {
      throw new Error('Ошибка')
    }
      
};

export {getBooks};