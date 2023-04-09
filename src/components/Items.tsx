import { useDispatch, useSelector} from 'react-redux';
import { getBooks } from '../modules/api';
import { Link } from 'react-router-dom';
import { addBooks, books, request, totalItems } from '../store/searchReducer';
import { DataFromForm, Item } from '../types';
import {getfilterItem} from '../modules/filter';

export default function Items() {

  const dispatch = useDispatch();
  const {query, orderBy, filter}: DataFromForm = useSelector(request); 
  const results: number = useSelector(totalItems); 
  const booksItems: Item[] = getfilterItem(useSelector(books), filter); 

  
  const loadMore = async () => {

   const startIndex = booksItems.length;

    const { totalItems, items } = await getBooks({query, orderBy, startIndex});

    dispatch(addBooks({totalItems, items }));
  };

  if (booksItems.length === 0) {
    return (
      <>
        <div className="container"></div>
      </>
    );
  }

  return (
    <>
      <div className="container">
      <div className='info'>
        <h3 className='text'>Найдено всего: {results}</h3>
      </div>
        {booksItems.map((item) => {
          let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let authors = item.volumeInfo.authors && Array.isArray(item.volumeInfo.authors)
            ? item.volumeInfo.authors[0]
            : '';
          return (
            <>
            <Link to={`/${item.id}`}>
              <div
                className="card"
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <h3 className="authors">{authors}</h3>
                </div>
              </div>
              </Link>
            </>
          );
        })}
        <button className='search button_wide' onClick={loadMore}>
        <h3>Еще</h3>
        </button>
      </div>
    </>
  );
}
