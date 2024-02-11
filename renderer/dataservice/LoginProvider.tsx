import axiosInstance from "./Configs/axiosInstance";


export function CreateTokenForUser(data:any) {
  return axiosInstance
    .post(`Account/CreateToken`,data)
    .then((response:any) => response)
    .catch((error:any)   => error)
}
