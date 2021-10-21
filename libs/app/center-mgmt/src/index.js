import React from 'react'
import AddCenter from './screen/AddCenter'
import { Provider } from 'react-redux'
import createStore from './redux/store';

export default function AppClientMgmt() {
    return (
        <Provider store={createStore()}>
            <AddCenter />
        </Provider>
    )
}

