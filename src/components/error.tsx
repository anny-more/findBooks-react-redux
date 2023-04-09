import { Link } from 'react-router-dom';
import { FallbackProps } from 'react-error-boundary';

const message = {
  'filter': 'Выбран неверный фильтр для поиска. Попробуй еще раз!'
} 

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {

    return (
      <>
        <div className='item_container'>
          <div className='item_view'>

            <button className='search button_wide' onClick={resetErrorBoundary}>
              <h3>Новый поиск</h3>
            </button>
          <h1 className='item_view-title'>Поиск не удался!</h1>
          <div className='item_view-author'>{message['filter']}</div>
          </div>
        </div>
      </>
    )
     

}