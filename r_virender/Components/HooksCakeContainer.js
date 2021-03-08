import React from 'react'
import { useSelector , useDispatch } from 'react-redux' 
import { buyCake } from '../redux/Cake'

function HooksCakeContainer() {

    const numOfCakes = useSelector(state => state.numOfCakes)

    const dispatch = useDispatch()
   return(
        <div>
            <h1>Num OF Cakes-- {numOfCakes}</h1>

              <button onClick= {() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HooksCakeContainer
