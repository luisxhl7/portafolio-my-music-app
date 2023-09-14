import React, { useEffect } from 'react'
import { PageLoyaut } from '../../templates/page-loyaut/Page-loyaut'
import { Button } from '../../atoms/button/Button'
import { getUser_thunks } from '../../../store/thunks/user-thunks';
import { useDispatch, useSelector } from 'react-redux';

export const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch( getUser_thunks() )
    }, []);

    return (
        <PageLoyaut>
            <h1>{user?.user?.email}</h1>
            <Button>Artistas</Button>
        </PageLoyaut>
    )
}
