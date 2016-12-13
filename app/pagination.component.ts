import {Component, Input, Output, EventEmitter, OnInit} from 'angular2/core'

@Component({
    selector:'pagination',
    template: `
    <nav aria-label="Page navigation" *ngIf="tabs.length > 1">
        <ul class="pagination">
            <li [class.disabled]="currentTab == 1" >
                <a href="javascript:void(0);" aria-label="Previous" (click)="movePrevious()">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li *ngFor="#tab of tabs" [class.active]="tab == currentTab" >
                <a href="javascript:void(0);" (click)="notifyChange(tab)" >{{tab}}</a>
            </li>
            
            <li [class.disabled]="currentTab == numberOfTabs">
                <a href="javascript:void(0);" aria-label="Next" (click)="moveNext()">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
    `
})
export class PaginationComponent implements OnInit{

    @Input() items = [];
    @Input() pageSize = 10;

    @Output() tabSelected = new EventEmitter();
    
    tabs = [];
    currentTab = 1;
    numberOfTabs = 0;

    ngOnInit(){
        this.tabs = this.getTabs();
    }

    private getTabs(){
        this.numberOfTabs = Math.ceil( this.items.length / this.pageSize );
        var result = [];
        for( var i = 0; i < this.numberOfTabs; i++ ){
            result.push(i+1);
        }
        return result;
    }

    moveNext(){
        if ( this.currentTab+1 <= this.numberOfTabs ){
            this.currentTab++;
        }
        this.broadcastEvent( this.currentTab );
    }

    movePrevious(){
        if ( this.currentTab - 1 > 0 ){
            this.currentTab--;
        }
        this.broadcastEvent( this.currentTab );
    }

    notifyChange(tab){
        this.currentTab = tab;
        this.broadcastEvent( tab );
    }

    broadcastEvent( tabNumber){
        this.tabSelected.emit( tabNumber );
    }

}