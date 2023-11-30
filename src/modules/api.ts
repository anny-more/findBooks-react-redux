import axios from 'axios';
import { RequestType } from '../types';

const MAX_RESULTS = 30;
const KEY = 'AIzaSyAYPVByWgr_Zr80JwyqpK1pNGxxpPmRAS4';

const getBooks = async ({query, orderBy, startIndex}: RequestType) => {
    const BASEURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${MAX_RESULTS}&key=${KEY}`;
    try {
      const response = await axios.get(BASEURL);
      if (response.status !== 200) {
        throw new Error('Error from api')
      }
      const {totalItems, items } = response.data;
      return {totalItems, items };
    }
    catch {
      throw new Error('Error')
    }
      
};

export {getBooks};