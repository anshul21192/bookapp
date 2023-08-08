import axios from "axios";


function getBookData(){
    axios.get('https://api.example.com/data')
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

function checkUser(data){
    console.log(data);
}

export {
    getBookData,
    checkUser
};