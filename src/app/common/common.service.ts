import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    currentURL = new Subject()
    playerData = new Subject()

    $currentURL: Observable<any> = this.currentURL.asObservable()
    $playerData: Observable<any> = this.playerData.asObservable()
    constructor() {

    }

    setCurrentPage(page: string) {
        this.currentURL.next(page)
    }

    setPlayerData(data: any) {
        this.playerData.next(data)
    }
}