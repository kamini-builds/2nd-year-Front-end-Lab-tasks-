import './App.css'

function Header(){
  return(
    <div>
      <h1>Header Component</h1>
    </div>
  )
}1
function PersonDetails(){
  let name="Kamini";
  let age=20;
  let address = "Uttar Pradesh";
  let food = "Pav Bhaji"
  return(
    <>
    <p>Name : {name}</p>
    <p>Age : {age}</p>
    <p>Address: {address}</p>
    <p>food : {food}</p>
    </>
  )
}

function HelloWorld(){
  return(
    <>
    <h1>Hello World</h1>
    </>
  )
}

function Footer(){
  return(
    <>
    <h1>Footer Component</h1>
    </>
  )
}


function App() {
  return(
    <>
     <Header/>
     <hr></hr>
     <PersonDetails/>
     <hr></hr>
     <HelloWorld/>
     <hr></hr>
     <Footer/>
    </>
  )
}

export default App
