import Grid from '../components/Grid'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Toolbar from '../components/ToolBar'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div className="p-4">
      <Header />
      <Toolbar />
      <SearchBar />
      <Grid />
      <Pagination />
    </div>
  )
}

export default Home
