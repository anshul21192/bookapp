import axios from "axios";


function getBookData(){
    axios.get('https://api.example.com/data')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

export default getBookData;