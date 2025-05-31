import { ILocalNotification } from "../interfaces/ILocalNotification";
import { IMessage } from "../interfaces/IMessage";
import { IRemoteNotification } from "../interfaces/IRemoveNotification";
import { Status } from "../types/StatusType";

export class MessageCenter {
  private static messages: IMessage[] = [];
  private static remoteEndpoint: string | null = null;

  static initialize(remoteEndpoint?: string): void {
    if (remoteEndpoint) {
      MessageCenter.remoteEndpoint = remoteEndpoint;
    }
  }

  static send<T extends ILocalNotification | IRemoteNotification>(
    payload: T,
    isLocal: T extends ILocalNotification ? true : false
  ): Promise<IMessage<T>> {
    const message: IMessage<T> = {
      id: Math.random().toString(36).substring(2, 9),
      timestamp: new Date(),
      status: 'pending',
      payload,
      isLocal: !!isLocal
    };

    MessageCenter.messages.push(message);

    if (isLocal) {
      message.status = 'sent';
      return Promise.resolve(message);
    } else {
      if (!MessageCenter.remoteEndpoint) {
        message.status = 'failed';
        return Promise.reject(new Error('Remote endpoint not configured'));
      }

      return fetch(MessageCenter.remoteEndpoint, {
        method: 'POST',
        body: JSON.stringify(message.payload)
      })
        .then(response => {
          if (response.ok) {
            message.status = 'sent';
            return message;
          }
          message.status = 'failed';
          throw new Error('Failed to send remote notification');
        })
        .catch(error => {
          message.status = 'failed';
          throw error;
        });
    }
  }

  static getAll<T = any>(status?: Status): IMessage<T>[] {
    return status
      ? MessageCenter.messages.filter((m: IMessage) => m.status === status)
      : [...MessageCenter.messages];
  }

  static getByType<T = any>(isLocal: boolean): IMessage<T>[] {
    return MessageCenter.messages.filter((m: IMessage) => m.isLocal === isLocal);
  }

  static removeById(id: string): boolean {
    const initialLength = MessageCenter.messages.length;
    MessageCenter.messages = MessageCenter.messages.filter((m: IMessage) => m.id !== id);
    return MessageCenter.messages.length !== initialLength;
  }

  static updateStatus(id: string, status: Status): boolean {
    const message = MessageCenter.messages.find((m: IMessage) => m.id === id);
    if (message) {
      message.status = status;
      return true;
    }
    return false;
  }
}