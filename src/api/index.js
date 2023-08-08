import axios from "axios";


function getBookData(){
  console.log(234567);
    axios.get('http://localhost:8080/users/allUsers')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
export {
  getBookData
};