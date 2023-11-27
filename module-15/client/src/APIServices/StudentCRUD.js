import axios from "axios"

export function Create(data){
  let url = "api/students/register"

  const postBody = data
  return axios.post(url, postBody)
    .then((res)=>{
      if(res.status === 201){
        return true;
      }
      else{
        return false;
      }
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
}

export function Update(id, data){
  let url = `api/students/update/:${id}`
  const updatesBody = data
  
  return axios.post(url, updatesBody)
  .then((res)=>{
    if(res.status === 200){
      return true;
    }
    else{
      return false;
    }
  })
  .catch((err) => {
    console.log(err);
    return false;
  });
}

export function Delete(id){
  let url = `api/students/delete/:${id}`

  return axios.get(url )
  .then((res)=>{
    if(res.status === 200){
      return true;
    }
    else{
      return false;
    }
  })
  .catch((err) => {
    console.log(err);
    return false;
  });
}

// Get All students data
export function getStudents(){
  let URL = "/api/students/"

  return axios.get(URL)
  .then((res)=>{
    if(res.status === 200){
      console.log(res)
      return res;
    }
    else{
      return false;
    }
  })
  .catch((err) => {
    console.log(err);
    return false;
  });
}