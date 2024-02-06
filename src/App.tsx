import ButterForm from './components/ButterForm'
import CardElement from './components/CardElement'

function App() {

  return (
    <>
     <ButterForm onSubmit={(data) => console.log(data)}>
      <CardElement />
      <button type="submit">
        Submit
      </button>
     </ButterForm>
    </>
  )
}

export default App
