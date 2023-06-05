import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { searchBooks, newSearch, addBooks, search } from '../store/searchReducer';
import { getBooks } from '../modules/api';
import {z} from 'zod';
import Button from './button';

export const CATEGORIES = ['All', 'Art', 'Architecture', 'Biography & Autobiography', 'Computers', 
'History', 'Medical', 'Poetry', 'Juvenile Nonfiction', 'Fiction', 'Comics & Graphic Novels', 
'Religion', 'Foreign Language Study', 'African American baseball players', 'Pride and vanity',
'Rugby Union football', 'Labor unions', 'Courtship'];

export const SORT = ['relevance', 'newely'] as const;


function Request() {
  const { register, handleSubmit } = useForm();
  const [minimize, setMinimize] = useState(false);

  const dispatch = useDispatch();

const formValidateSchema = z.object({
    query: z.string().min(1),
    filter: z.string(),
    orderBy: z.enum(SORT),
});

const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const {query, filter, orderBy} = formValidateSchema.parse(data);
    dispatch(search(true));
    dispatch(newSearch());
    dispatch(searchBooks({query, filter, orderBy}));
    const {totalItems, items} = await getBooks({query, orderBy, startIndex: 0});
    dispatch(addBooks({totalItems, items}));
    dispatch(search(false));
    setMinimize(true);
  };

  return (
    <>
        <div className={minimize ? ' header_mini' : 'header'}>
            <h1 onClick={() => setMinimize(!minimize)}>Найди свою книгу здесь</h1>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <label className=""> 
                <input
                {...register('query')}
                autoFocus
                className="textinput"
                type="text"
                placeholder="Название книги"
                onClick={() => setMinimize(false)}
                />
                <h3>Фильтр</h3>
                <select
                title='Внимание! Hесоответствие фильтра может повлиять на поиск'
                {...register('filter')}
                className="select"
                id="filter"
                name="filter"
                form="form"
                >
                    {CATEGORIES.map((item) => {return (
                        <option value={item}>{item}</option>
                        )})}
                </select>
                <h3>Сортировка</h3>
                <select
                {...register('orderBy')}
                className="select"
                id="orderBy"
                name="orderBy"
                form="form"
                >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
                </select>
                <Button>Найти</Button>
            </label>
            </form>
        </div>
    </>
  );
}

export { Request }