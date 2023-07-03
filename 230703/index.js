


const INCREMENT = "INCREMENT"
const initialSate = {
  count : 0
}

function increment(){
  return{
    type : INCREMENT
  }
}

function reducer(state, action){
  switch(action.type){
    case INCREMENT:
      return {
        count: state.count +1
      }
      default:
        return state;
  }
}

const store = Redux.createStore(reducer)

function updateUI(){
  const countElement = document.getElementById("count")
  countElement.textContent = store.getState().count;
}

function handleIncrement(){
  store.dispatch(increment())
}

//const incrementBtn = document.getElementById("increment")
//incrementBtn.addEventListener("click", handleIncrement)