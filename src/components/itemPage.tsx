import { useParams, useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { books } from '../store/searchReducer';
import Button from './button';

export default function ItemPage() {
    const booksList = useSelector(books);
    const params = useParams();
    const navigate = useNavigate();
    const item = booksList.find(item => item.id === params.id);
    if (!item) {
        throw new Error('Item not found')
    }
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail;
    const goBack = () => navigate(-1);

    return (
       <div className='item_container'>
        <div className='item_view'>
            <Button className='width' callback={goBack}>Назад</Button>
        <img className='item_view-img' src={thumbnail} alt="" />
        <h3 className='item_view-title'>{item.volumeInfo.title}</h3>
        <h4 className='item_view-author'>{item.volumeInfo.authors ? item.volumeInfo.authors.reduce((acc, item) => `${acc}, ${item}`)
            : ''}
        </h4>
        <p className='item_view-description'>{ item.volumeInfo.description ? item.volumeInfo.description : ''}</p>

        </div>
        
        </div>
    )
 
};