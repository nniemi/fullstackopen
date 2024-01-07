import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}


const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`);
}

const update = (id,updatedPerson) => {
    return axios.put(`${baseUrl}/${id}`, updatedPerson);
}

export default { 
  getAll: getAll, 
  create: create, 
  deletePerson: deletePerson,
  update: update
}