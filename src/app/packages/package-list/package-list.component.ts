import { Component, OnInit } from '@angular/core';
import { Package } from './package.model';

@Component({
  selector: 'app-package-list',
  templateUrl: './package-list.component.html',
  styleUrls: ['./package-list.component.css']
})
export class PackageListComponent implements OnInit {

  packages: Package[] = [
    new Package("Churrasco", "Churrasco de picanha", "https://pubimg.band.uol.com.br/files/1307321594d074a21c9f.png"),
    new Package("Churrasco", "Churrasco de picanha", "https://pubimg.band.uol.com.br/files/1307321594d074a21c9f.png")
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
