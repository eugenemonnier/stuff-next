import { useRouter } from 'next/router'
import axios from 'axios'

export default function StuffDetail (props) {
  const url = 'https://my-stuff-api.herokuapp.com/api/v1/stuff/'
  const router = useRouter()
  async function deleteHandler () {
    await axios.delete(url + props.stuff.id)
    router.push('/')
  }
  return (
    <>
      <h1>I am a single item: {props.stuff.name}</h1>
      <button onClick={() => deleteHandler(props.stuff.id)}>Delete</button>
    </>
  )
}

export async function getServerSideProps (context) {
  const response = await fetch(`https://my-stuff-api.herokuapp.com/api/v1/stuff/${context.params.id}`)
  const stuff = await response.json()
  console.log('stuff: ', stuff);
  return { props: { stuff } }
}