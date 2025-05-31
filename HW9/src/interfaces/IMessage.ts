import { Status } from "../types/StatusType";

export interface IMessage<T = any> {
  id: string;
  timestamp: Date;
  status: Status;
  payload: T;
  isLocal?: boolean;
}