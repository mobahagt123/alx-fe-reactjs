import './App.css'
import PostsComponent from './components/PostsComponent'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  

  return (
    <>
      <h3>This is react query Quiz</h3>
      <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
    </>
  )
}

export default App
