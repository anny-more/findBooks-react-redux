import { Link } from "react-router-dom";
import { Item } from "../types";
import styles from  './card.module.css';
import { useDispatch } from "react-redux";
import { addViewBooks } from "../store/searchReducer";

export default function Card(item: Item) {
  const dispatch = useDispatch();
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    let authors = item.volumeInfo.authors && Array.isArray(item.volumeInfo.authors)
      ? item.volumeInfo.authors[0]
      : '';
    const addBooks = () => {
      dispatch(addViewBooks(item));
    }
    return (
                <div
                  key={item.id}
                  className={styles.card}
                >
                  <Link to={`/${item.id}`}>
                    <img className={styles.img} src={thumbnail} alt="" onClick={addBooks} />
                  </Link>
                  <div className={styles.info}>
                    <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                    <p className={styles.authors}>{authors}</p>
                  </div>
                </div>
            );

  }
  