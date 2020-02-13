import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { AuthenService } from './authen.service';
import { environment } from 'src/environments/environment';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class FilesAppService {

  constructor(
    private http: HttpClient,
    private authen: AuthenService
  ) { }

  getFilesName(): Object {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${this.authen.getAuthen()}`
    });
    return this.http.get(`${environment.apiUrl}/files-apk`, { headers: headers })
      .toPromise().then((res: Response) => res)
  }

  getFilesNameDownload(fileName: String): Object {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'authorization': `Bearer ${this.authen.getAuthen()}`
    })

    return this.http.get(`${environment.apiUrl}/files-apk/${fileName}`, { headers: headers, responseType: "blob" })
      .toPromise()
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(err => console.error("download error = ", err))
  }
}
