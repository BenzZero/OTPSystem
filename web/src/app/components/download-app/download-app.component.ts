import { Component, OnInit } from '@angular/core';
import { FilesAppService } from 'src/app/service/files-app.service';

@Component({
  selector: 'app-download-app',
  templateUrl: './download-app.component.html'
})
export class DownloadAppComponent implements OnInit {
  filesName: any
  file: any

  constructor(
    private filesNameService: FilesAppService
  ) { }

  async ngOnInit() {
    this.filesName = await this.filesNameService.getFilesName()
  }

  async onClickDownloadFileApk(fileName: String) {
    this.file = await this.filesNameService.getFilesNameDownload(fileName)
    const blob = new Blob([this.file], { type: 'text/apk' });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }
}
