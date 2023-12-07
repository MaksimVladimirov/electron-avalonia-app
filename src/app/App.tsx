import { Routes, Route, useNavigate } from 'react-router-dom';
import { TasksPage, CategotiesPage, ErrorPage } from '@/pages';

import { useTodoStore } from '@/hooks';
import { Loader } from '@/components';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

function App() {
    const store = useTodoStore();
    const navigate = useNavigate();

    useEffect(() => {
        store.loadAllData();
    }, []);

    useEffect(() => {
        if (store.error.isError) {
            navigate('/errorPage');
        }
    }, [store.error.isError]);

    return (
        <div className='App'>
            <div className='wrapper'>
                <Routes>
                    <Route path='/' element={<TasksPage />}></Route>
                    <Route path='/categories' element={<CategotiesPage />}></Route>
                    <Route path='/errorPage' element={<ErrorPage />}></Route>
                </Routes>
                {store.isLoading && <Loader />}
            </div>
        </div>
    );
}

export default observer(App);