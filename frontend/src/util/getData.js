import axios from "axios"

const GetData = async() => {
    console.log('GetData lefutott');
    let response = await axios.get('http://localhost:3333')

    return response.data
}
 
export default GetData;