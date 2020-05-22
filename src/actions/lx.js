import api from "@/services/api"
import { post } from "../utils/request"
export function getDate (options) {
  return {
    type:"GET-DATE",
    payload:post(api.listWithPage,options)
  }
}
export function setObj (payload) {
  return {
    type:"SETOBJ",
    payload
  }
}