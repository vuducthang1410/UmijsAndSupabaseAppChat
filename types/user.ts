import { message } from "antd";

export interface User {
  name: string;
  token: string;
  role: string;
  isLogin: boolean
}
export interface Profile {
  name?: string;
  avatar?: string;
  id?: string;
  is_online?: boolean
  created_at?:string
}
export interface HistoryConversation{
  conversation_id:string,
  name:string,
  user_id:string;
  is_online:boolean,
  avatar:string
}
export interface Message{
  id:string,
  sender_id:string,
  send_at:string
  conversation_id:string,
  message:string,
  type_message:string
}