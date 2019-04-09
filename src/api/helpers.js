import axios from 'axios'
const ERRNO_OK = 0

function get (url) {
  return function (paramas) {
    return axios.get(url, {
      paramas
    }).then(res => {
      const {
        errno,
        data
      } = res.data
      if (errno === ERRNO_OK) {
        return data
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
export default get
