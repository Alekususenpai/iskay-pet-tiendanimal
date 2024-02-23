import DogPageNotFound from "../../assets/DogPageNotFound.svg"

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-70vh'>
      <img src={DogPageNotFound} className='h-60' alt="Page not found" />
      <h1 className='my-5 text-2xl'>Página no encontrada</h1>
    </div>
  )
}

export default NotFound