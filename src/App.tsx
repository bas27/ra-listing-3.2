import './App.css'
import { Listing } from './components/Listing'
import data from './data/etsy.json'

function App() {

  const cleanedData = data.map(item => ({
    ...item,
    url: item.url || "", // Если url undefined, то присваиваем пустую строку
  }));

  return (
    <>
      <Listing items={cleanedData} />
    </>
  )
}
export default App
