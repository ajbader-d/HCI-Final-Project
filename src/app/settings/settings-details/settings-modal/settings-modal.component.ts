import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NativeKeyboard } from '@ionic-native/native-keyboard/ngx';

@Component({
  selector: 'app-settings-modal',
  templateUrl: './settings-modal.component.html',
  styleUrls: ['./settings-modal.component.scss'],
})
export class SettingsModalComponent implements OnInit {

  constructor(
    public nativeKeyboard: NativeKeyboard,
    private modalCtrl: ModalController,
    ) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
