import Accordion from "./components/Accordion"
import ImageSlider from "./components/ImageSlider"
import InfiniteScroll from "./components/InfiniteScroll"
import RandomColorGenerator from "./components/RandomColorGenerator"
import StarRating from "./components/StarRating"
import TreeView from "./components/TreeView"
import { menuData } from "./components/TreeView/data"

function App() {

  return (
    <>
      <Accordion />
      <RandomColorGenerator />
      <StarRating />
      <ImageSlider />
      <InfiniteScroll />
      <TreeView menus={menuData} />
    </>
  )
}

export default App
