import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { books, viewBooks } from '../store/searchReducer';
import Button from './button';
import styles from './itemPage.module.css';
import Card from './card';

export default function ItemPage() {
    const booksList = useSelector(books);
    const viewBooksList = useSelector(viewBooks);
    const params = useParams();
    const navigate = useNavigate();
    const item = booksList.find(item => item.id === params.id);

    if (!item) {
        throw new Error('Item not found')
    }

    const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    const goBack = () => navigate(-1);

    return (
       <div className={styles.item_container}>
        <Button className='width' callback={goBack}>Назад</Button>
        <div className={styles.item_view}>
            <div style={{backgroundImage: `url(${thumbnail})`}} className={styles.img}>
            </div>
            <div className={styles.info}>
            <div className={styles.item_view}></div>
            <h1>{item.volumeInfo.title}</h1>
            <h2>{item.volumeInfo?.subtitle}</h2>
            <h3>{item.volumeInfo.authors ? item.volumeInfo.authors.reduce((acc, item) => `${acc}, ${item}`)
              : ''}
            </h3>
            <div className={styles.description}>{item.volumeInfo.description ? item.volumeInfo.description : '...'}</div>
          </div>
        </div>
        <div className={styles.view}>
          <p>Недавно смотрели</p>
          {viewBooksList.map(item => {
            return Card(item)
          }
          )}
        </div>
        </div>
    )

};
