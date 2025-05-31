export interface IRemoteNotification {
  deviceToken: string;
  title: string;
  body: string;
  priority?: 'high' | 'normal';
}