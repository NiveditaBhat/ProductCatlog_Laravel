import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from 'rxjs';

@Injectable()
export class ModalService {
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message);

    return of(confirmation);
  }
}
