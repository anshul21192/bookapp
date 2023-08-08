import axios from "axios";


async function getBookData(data){

  let value=[];

    await axios.get(`http://localhost:8080/book/user/${data}`)
    .then(response => {
      value=response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    return value;
}

async function getTradeData(data){

  let value=[];

    await axios.get(`http://localhost:8080/trade/book/${data}`)
    .then(response => {
      value=response.data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });

    return value;
}

async function checkUser(data){
    let value;
   await axios.post('http://localhost:8080/users/checkUserExist',data)
    .then(response => {
      value=response.data;
    })
    .catch(error => {
      window.alert('something went wrong');
      value=false;
    });
    return value
}

export {
    getBookData,
    checkUser,
    getTradeData
};