import { FallbackProps } from 'react-error-boundary';
import Button from './button';

const message = {
  'filter': 'Выбран неверный фильтр для поиска. Попробуй еще раз!'
} 

export default function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {

    return (
      <>
        <div className='item_container'>
          <div className='item_view'>
          <h1 className='item_view-title'>Поиск не удался!</h1>
          <div className='item_view-author'>{message['filter']}</div>
          <Button className='width' callback={resetErrorBoundary}>Новый поиск</Button>
          </div>
        </div>
      </>
    )
     

}