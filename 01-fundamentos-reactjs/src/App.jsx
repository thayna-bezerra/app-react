import { Header } from './components/Header';
import { Post } from './Post';
import './global.css'

export function App() {
  return (
    <div>
      <Header/>

      <Post 
        author='Thayna' 
        content='Yo soy valentona aaaaaaaaaaaaaaaaaaa'/>
      <Post
        author='Joao'
        content='aroaroaor'/>
    </div>
  )
}
