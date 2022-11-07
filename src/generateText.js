import  axios from   'axios' ;

let loading = false
function generateText() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }
  document.getElementById('joke').innerHTML = 'Loading...'

  document.getElementById('laughImg').classList.add('rainbow')
  axios.get('https://icanhazdadjoke.com/', config).then((res) => {
    document.getElementById('joke').innerHTML = res.data.joke
  }).catch((err) => {
    console.log(err)
  }).finally(() => {

    document.getElementById('laughImg').classList.remove('rainbow')
    loading = false
  })
}
if(loading) {

}
export default generateText;