import { Observable } from 'tns-core-modules/data/observable';
import { Myplugin } from 'nativescript-myplugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private myplugin: Myplugin;

  constructor() {
    super();

    this.myplugin = new Myplugin();
    this.message = this.myplugin.message;
  }
}
