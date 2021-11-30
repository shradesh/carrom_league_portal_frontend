import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    
    currentURL = new Subject()
    playerData = new Subject()
    scoreData = new Subject()

    $currentURL: Observable<any> = this.currentURL.asObservable()
    $playerData: Observable<any> = this.playerData.asObservable()
    $scoreData: Observable<any> = this.scoreData.asObservable()
    constructor() {

    }

    setCurrentPage(page: string) {
        this.currentURL.next(page)
    }

    setPlayerData(data: any) {
        this.playerData.next(data)
    }
    setScoreData(data:any) {
        this.scoreData.next(data)
    }
}