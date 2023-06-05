import { useDispatch, useSelector} from 'react-redux';
import { getBooks } from '../modules/api';
import { addBooks, books, request, totalItems, isLoading, search } from '../store/searchReducer';
import { DataFromForm, Item } from '../types';
import {getfilterItem} from '../modules/filter';
import Button from './button';
import Card from './card';

export default function Items() {

  const dispatch = useDispatch();
  const {query, orderBy, filter}: DataFromForm = useSelector(request); 
  const results: number = useSelector(totalItems);
  const loading: boolean = useSelector(isLoading);
  const booksItems: Item[] = getfilterItem(useSelector(books), filter); 

  const loadMore = async () => {
    dispatch(search(true));
    const startIndex = booksItems.length;
    const { totalItems, items } = await getBooks({query, orderBy, startIndex});
    dispatch(addBooks({totalItems, items }));
    dispatch(search(false));
  };

  if (booksItems.length === 0) {
    return (
      <>
        <div className="container">
          {loading ? 'Loading...' : ''}
        </div>
      </>
    );
  }

  return (
    <>
    <div className='container_main'>
      <div className='info'>
        <h4 className='text'>Найдено всего: {results}</h4>
      </div>
    <div className="container">
        {booksItems.map((item) => {
          return Card(item)
        })}
      </div>
        <Button className='width' active={loading} callback={loadMore}>{loading ? 'Loading...' : 'Еще'}</Button>
      </div>
    </> 
  );
}
