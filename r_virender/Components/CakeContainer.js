import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux/Cake'


function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={() => props.buyCake()}>Buy Cake</button>
    </div>
  )
}
//  numOfCakes: state.cake,
const mapStateToProps = state => {
    console.log(state)
  return {
    numOfCakes:state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (value) => dispatch(buyCake(value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)


 
// import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'

// import { buyCake } from '../redux/Cake/index'


// const CakeContainer =  (props) =>  {

//     const numOfCakes =  useSelector(state => state.numOfCakes)
//     const dispatch = useDispatch();
//   return (
//     <div>
//       <h2>Number of cakes - {numOfCakes} </h2>
//       <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
//     </div>
//   )
// }

// export default CakeContainer;