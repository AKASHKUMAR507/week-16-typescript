import { Plus } from './assets/icons/Plus'
import { Button } from './components/Button'

function App() {
  return (
    <div className='flex items-center justify-center h-screen w-full bg-[#1c1c1c]'>
      <Button title={'Share'} size={'sm'} variant={"primary"} onChange={() => { return console.log('clicked') }} />
    </div>
  )
}

export default App
