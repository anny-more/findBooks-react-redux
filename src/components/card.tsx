import { Link } from "react-router-dom";
import { Item } from "../types";
import styles from  './card.module.css';

export default function Card(item: Item) {
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let authors = item.volumeInfo.authors && Array.isArray(item.volumeInfo.authors)
      ? item.volumeInfo.authors[0]
      : '';
    const pdfLink = item.accessInfo?.pdf && item.accessInfo.pdf?.acsTokenLink
    return (
                <div
                  key={item.id}
                  className={styles.card}
                >
                  <Link to={`/${item.id}`}>
                    <img className={styles.img} src={thumbnail} alt="" />
                  </Link>
                  <div className={styles.info}>
                    <h3 className={styles.title}>{item.volumeInfo.title}</h3>
                    <p className={styles.authors}>{authors}</p>
                    {pdfLink && <div className={styles.green}>PDF</div>}
                  </div>

                </div>
            );

  }
  