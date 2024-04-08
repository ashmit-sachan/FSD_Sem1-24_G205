import Footer from './fragments/Footer'
import Header from './fragments/Header'
import Index from './pages/Index'

function App() {
  return (
    <>
    <div>
      <Header/>
      
      <main className="min-h-screen">
        <Index/>
      </main>

      <Footer/>
    </div>
    </>

  )
}

export default App
