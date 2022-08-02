import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/folder/Home', icon: 'mail' },
    { title: 'Aeropuerto', url: '/folder/Aeropuerto', icon: 'airplane-outline' },
    { title: 'Almacen', url: '/folder/Almacen', icon: 'heart' },
    { title: 'Terminales', url: '/folder/Terminales', icon: 'archive' },
    { title: 'Flota', url: '/folder/Flota', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
