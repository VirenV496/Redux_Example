import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Action} from '../redux/actions/Action'

const AComp = () => {
    const dispatch = useDispatch();
    const reducer = useSelector((state) => state.reducer)
    const [state, setState] = useState('')
    return (
        <div>
            <h1>Hello world</h1>
            <input value={reducer} onChange={(e) => dispatch(Action(e.target.value))} />
            {/* <input value={state} onChange={(e) => setState(e.target.value)} /> */}

        </div>
    )
}

export default AComp
