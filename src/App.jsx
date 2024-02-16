import Header from "./components/Header"
import Card from "./components/Card"
import pdt from "./data"

function CreateCard(product) {
  return (
    <Card 
      key={product.id}
      title={product.title}
      description={product.description}
    />
  )
}


function App() {
  return (
    <div>
      <Header />
      <div className="input" >
        <div>
          <input type="text" placeholder="Search"/>
          <button>Search Words</button>
        </div>
        <input type="text" placeholder="Add New Words"/>
      </div>
      
      <div className="section">
        {pdt.map(CreateCard)}
      </div>
    </div>
  )
}

export default App





