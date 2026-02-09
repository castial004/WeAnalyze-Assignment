
import Main from "./components/Main"
import { Navbar2 } from "./components/Navbar2"
import { ImageConatiner } from "./components/ImageContainer"
import { Userbar } from "./components/Userbar"
import Article from "./components/Article"

function App() {
  return (
    <>
    <Navbar2/>
    <div className="container mx-auto pt-20">
      <h1 className="text-2xl"><b> Tickeing Capacity-Helpdesk</b></h1>
    </div>
    <Userbar/> 
    <Article/>     
    <ImageConatiner url={"https://cdn.dribbble.com/userupload/8024606/file/original-13d0c1f49417508ffd6b01770d159e9d.png?resize=1504x1128&vertical=center"}/>
      
    </>
  )
}

export default App
