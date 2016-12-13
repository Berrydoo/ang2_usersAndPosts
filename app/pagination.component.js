System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PaginationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PaginationComponent = (function () {
                function PaginationComponent() {
                    this.items = [];
                    this.pageSize = 10;
                    this.tabSelected = new core_1.EventEmitter();
                    this.tabs = [];
                    this.currentTab = 1;
                    this.numberOfTabs = 0;
                }
                PaginationComponent.prototype.ngOnInit = function () {
                    this.tabs = this.getTabs();
                };
                PaginationComponent.prototype.getTabs = function () {
                    this.numberOfTabs = Math.ceil(this.items.length / this.pageSize);
                    var result = [];
                    for (var i = 0; i < this.numberOfTabs; i++) {
                        result.push(i + 1);
                    }
                    return result;
                };
                PaginationComponent.prototype.moveNext = function () {
                    if (this.currentTab + 1 <= this.numberOfTabs) {
                        this.currentTab++;
                    }
                    this.broadcastEvent(this.currentTab);
                };
                PaginationComponent.prototype.movePrevious = function () {
                    if (this.currentTab - 1 > 0) {
                        this.currentTab--;
                    }
                    this.broadcastEvent(this.currentTab);
                };
                PaginationComponent.prototype.notifyChange = function (tab) {
                    this.currentTab = tab;
                    this.broadcastEvent(tab);
                };
                PaginationComponent.prototype.broadcastEvent = function (tabNumber) {
                    this.tabSelected.emit(tabNumber);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "items", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "pageSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], PaginationComponent.prototype, "tabSelected", void 0);
                PaginationComponent = __decorate([
                    core_1.Component({
                        selector: 'pagination',
                        template: "\n    <nav aria-label=\"Page navigation\" *ngIf=\"tabs.length > 1\">\n        <ul class=\"pagination\">\n            <li [class.disabled]=\"currentTab == 1\" >\n                <a href=\"javascript:void(0);\" aria-label=\"Previous\" (click)=\"movePrevious()\">\n                    <span aria-hidden=\"true\">&laquo;</span>\n                </a>\n            </li>\n\n            <li *ngFor=\"#tab of tabs\" [class.active]=\"tab == currentTab\" >\n                <a href=\"javascript:void(0);\" (click)=\"notifyChange(tab)\" >{{tab}}</a>\n            </li>\n            \n            <li [class.disabled]=\"currentTab == numberOfTabs\">\n                <a href=\"javascript:void(0);\" aria-label=\"Next\" (click)=\"moveNext()\">\n                    <span aria-hidden=\"true\">&raquo;</span>\n                </a>\n            </li>\n        </ul>\n    </nav>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PaginationComponent);
                return PaginationComponent;
            }());
            exports_1("PaginationComponent", PaginationComponent);
        }
    }
});
//# sourceMappingURL=pagination.component.js.map