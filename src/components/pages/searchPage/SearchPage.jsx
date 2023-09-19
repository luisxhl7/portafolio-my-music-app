import React, { useEffect } from 'react'
import { useForm } from '../../../hooks/useForm';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearch_thunks } from '../../../store/thunks/search-thunks';
import { useDispatch, useSelector } from 'react-redux';
import { CardCover } from '../../molecules/CardCover/CardCover';
import { Search } from '@mui/icons-material';
import { Input } from '../../atoms/Input';
import './SearchPage.scss'

export const SearchPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();
    const {search, searchLoad} = useSelector( (state) => state.search);

    const { q = '' } = queryString.parse( location.search);
    const numeroAleatorio = Math.floor(Math.random() * 26);
    const letraAleatoria = String.fromCharCode(97 + numeroAleatorio);
    
    const { searchText, onInputChange } = useForm({
        searchText: ''
    })
    
    useEffect(() => {
        if (searchText) {
            navigate(`?q=${ searchText.toLowerCase().trim() }`)
            dispatch(getSearch_thunks(searchText))
        }else{
            dispatch(getSearch_thunks(letraAleatoria))
        }
    }, [q])

    const onSearchSubmit = (e) => {
        e.preventDefault()
        if (searchText.trim().length >= 1) {
            navigate(`?q=${ searchText.toLowerCase().trim() }`)
        }
    }

    return (
        <div className='search'>
            <form onSubmit={ onSearchSubmit}>
                <Input
                    type="text"
                    placeholder='¿Qué quieres escuchar?'
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={onInputChange}
                    icon={<Search/>}
                />
            </form>
            <div className='search__content'>
                {searchLoad ?
                    Array.from({ length: 18 }, (_, index) => (
                      <CardCover
                        key={index}
                        load={searchLoad}
                      />
                    )) 
                    :    
                    search?.map( item => (
                        <CardCover 
                            key={item?.id}
                            id={item?.id}
                            image={item?.images[0]?.url}
                            title={item?.name}
                            description={item?.type}
                        />

                    ))
                }
            </div>
        </div>
    )
}
