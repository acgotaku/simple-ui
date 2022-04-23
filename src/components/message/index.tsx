import ReactDOM from 'react-dom';
import MessageComp from './Message';
import Portal from '../Portal';
import { IMessageRef, ToastType } from './Message.types';

const DEFAULT_DURATION = 3;

class Message {
  private instance: IMessageRef | null = null;

  info(content: string, duration = DEFAULT_DURATION) {
    this.show('info', content, duration);
  }

  success(content: string, duration = DEFAULT_DURATION) {
    this.show('success', content, duration);
  }

  warning(content: string, duration = DEFAULT_DURATION) {
    this.show('warning', content, duration);
  }

  error(content: string, duration = DEFAULT_DURATION) {
    this.show('error', content, duration);
  }

  loading(content: string, duration = DEFAULT_DURATION) {
    this.show('loading', content, duration);
  }

  private async getMessageInstance() {
    this.instance = this.instance || (await this.initMessageInstance());
    return this.instance;
  }

  private initMessageInstance(): Promise<IMessageRef | null> {
    const container = document.createElement('div');

    return new Promise((resolve, reject) => {
      try {
        ReactDOM.render(
          <Portal>
            <MessageComp ref={resolve} />
          </Portal>,
          container
        );
      } catch (err) {
        reject(err);
      }
    });
  }

  private async show(type: ToastType, content: string, duration: number) {
    const instance = await this.getMessageInstance();
    if (instance) {
      instance.add({
        type,
        content,
        duration
      });
    }
  }
}

export default new Message();
