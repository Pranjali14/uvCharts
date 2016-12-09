webpackJsonp([1],{

/***/ 97:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(26);
	var shared_module_1 = __webpack_require__(58);
	var chart_details_wrapper_1 = __webpack_require__(98);
	var chart_code_1 = __webpack_require__(101);
	var chart_description_1 = __webpack_require__(105);
	var chart_editor_1 = __webpack_require__(106);
	var chart_details_1 = __webpack_require__(110);
	var routes = [
	    { path: ':chartType', component: chart_details_wrapper_1.ChartDetailsWrapper }
	];
	var ChartDetailsModule = (function () {
	    function ChartDetailsModule() {
	    }
	    ChartDetailsModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                shared_module_1.SharedModule,
	                router_1.RouterModule.forChild(routes)
	            ],
	            declarations: [
	                chart_editor_1.ChartEditorComponent,
	                chart_details_wrapper_1.ChartDetailsWrapper,
	                chart_details_1.default,
	                chart_code_1.ChartCodeComponent,
	                chart_description_1.ChartDescriptionComponent
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ChartDetailsModule);
	    return ChartDetailsModule;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChartDetailsModule;
	

/***/ },

/***/ 98:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(26);
	var common_service_1 = __webpack_require__(63);
	var components_list_1 = __webpack_require__(61);
	var ChartDetailsWrapper = (function () {
	    function ChartDetailsWrapper(router, route, commonService) {
	        this.router = router;
	        this.route = route;
	        this.commonService = commonService;
	        this.componentData = null;
	        this.entryComponents = new components_list_1.EntryComponents();
	    }
	    ChartDetailsWrapper.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            if (params['chartType']) {
	                _this.createChartComponent(params['chartType']);
	                _this.chartType = _this.commonService.getChartTypeName(params['chartType']);
	            }
	        });
	    };
	    ChartDetailsWrapper.prototype.createChartComponent = function (chartType) {
	        var component = this.entryComponents.getComponentForChartType(chartType);
	        this.componentData = {
	            component: component
	        };
	    };
	    ChartDetailsWrapper = __decorate([
	        core_1.Component({
	            selector: 'chart-details-wrapper',
	            styles: [__webpack_require__(99)],
	            template: "<div class=\"wrapper\">\n                <h2>{{chartType}}</h2>\n                <div>\n                  <chart-description></chart-description>\n                  <chart-details [componentData]=\"componentData\"></chart-details>\n                  <chart-editor></chart-editor>\n                </div>\n                <chart-code></chart-code>\n              </div>\n              "
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, common_service_1.CommonService])
	    ], ChartDetailsWrapper);
	    return ChartDetailsWrapper;
	}());
	exports.ChartDetailsWrapper = ChartDetailsWrapper;
	

/***/ },

/***/ 99:
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(100);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 100:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(67)();
	// imports


	// module
	exports.push([module.id, "chart-details, chart-editor {\n    display: inline-block;\n    vertical-align: top;\n    line-height: 2.2;\n    margin: 10px;\n}\n\nchart-description {\n    padding-left: 20px;\n    display: block;\n    margin: 60px 0;\n}\n.wrapper {\n    background: #f8f8f8;\n    padding: 20px;\n}\n", ""]);

	// exports


/***/ },

/***/ 101:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(26);
	var http_1 = __webpack_require__(24);
	var ChartCodeComponent = (function () {
	    function ChartCodeComponent(router, route, http) {
	        this.router = router;
	        this.route = route;
	        this.http = http;
	    }
	    ChartCodeComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.populateDescription(params['chartType']);
	        });
	        this.activeTab = 'ts';
	    };
	    ChartCodeComponent.prototype.populateDescription = function (chartType) {
	        var _this = this;
	        if (chartType) {
	            this.populateFileData(chartType, 'ts').subscribe(function (code) {
	                _this.typescriptCode = code;
	                setTimeout(function name() {
	                    var w = window;
	                    w.SyntaxHighlighter.highlight();
	                }, 100);
	            });
	            this.populateFileData(chartType, 'css').subscribe(function (code) { return _this.cssCode = code; });
	        }
	    };
	    ChartCodeComponent.prototype.populateFileData = function (chartType, suffix) {
	        var filePath = 'app/components/' + chartType + '/' + chartType + '.' + suffix;
	        return this.http.get(filePath).map(this.extractData);
	    };
	    ChartCodeComponent.prototype.extractData = function (res) {
	        return res._body;
	    };
	    ChartCodeComponent.prototype.checkVisibility = function () {
	        var code;
	        switch (this.activeTab) {
	            case 'ts':
	                code = this.typescriptCode;
	                break;
	            case 'css':
	                code = this.cssCode;
	                break;
	            case 'html':
	                code = this.htmlCode;
	                break;
	            default:
	                code = '';
	        }
	        return (!code || code.trim() === '');
	    };
	    ChartCodeComponent.prototype.showTab = function (tab) {
	        this.activeTab = tab;
	    };
	    ChartCodeComponent.prototype.isCurrentTab = function (tab) {
	        return this.activeTab === tab;
	    };
	    ChartCodeComponent.prototype.copyToClipboard = function (event) {
	        var target = event.target || event.srcElement || event.currentTarget;
	        var textarea = document.getElementById('code-content');
	        var code = '';
	        switch (this.activeTab) {
	            case 'ts':
	                code = this.typescriptCode;
	                break;
	            case 'css':
	                code = this.cssCode;
	                break;
	            case 'html':
	                code = this.htmlCode;
	        }
	        target.innerHTML = 'COPIED!';
	        textarea.innerHTML = code;
	        textarea.select();
	        try {
	            document.execCommand('copy');
	        }
	        catch (e) {
	            console.error(e);
	        }
	    };
	    ChartCodeComponent.prototype.blurAction = function (event) {
	        var target = event.target || event.srcElement || event.currentTarget;
	        target.innerHTML = 'Copy to clipboard';
	    };
	    ChartCodeComponent = __decorate([
	        core_1.Component({
	            selector: 'chart-code',
	            template: __webpack_require__(102),
	            styles: [__webpack_require__(103)]
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, http_1.Http])
	    ], ChartCodeComponent);
	    return ChartCodeComponent;
	}());
	exports.ChartCodeComponent = ChartCodeComponent;
	

/***/ },

/***/ 102:
/***/ function(module, exports) {

	module.exports = "<div>\n    <h3>Code</h3>\n    <ul class=\"nav nav-pills\">\n        <li (click)=\"showTab('ts')\" [ngClass]=\"{'active': isCurrentTab('ts')}\"><a data-toggle=\"pill\">Typescript</a></li>\n        <li (click)=\"showTab('css')\" [ngClass]=\"{'active': isCurrentTab('css')}\"><a data-toggle=\"pill\">CSS</a></li>\n        <!--<li (click)=\"showTab('html')\" [ngClass]=\"{'active': isCurrentTab('html')}\"><a data-toggle=\"pill\">HTML</a></li>-->\n    </ul>\n    <br>\n    <div class=\"tab-content\">\n        <button class=\"button copy-to-clipboard primary\" (mousedown)=\"copyToClipboard($event)\" (blur)=\"blurAction($event)\" [hidden]=\"checkVisibility()\">Copy to clipboard</button>\n        <div class='code-wrapper' [hidden]=\"!isCurrentTab('ts')\">\n            <pre id=\"ts\" class=\"brush: js\">{{typescriptCode}}</pre>\n        </div>\n        <div class='code-wrapper' [hidden]=\"!isCurrentTab('css')\">\n            <pre id=\"css\">{{cssCode}}</pre>\n        </div>\n        <div class='code-wrapper' [hidden]=\"!isCurrentTab('html')\">\n            <pre id=\"html\">{{htmlCode}}</pre>\n        </div>\n        <div [hidden]=\"!isCurrentTab('customize')\">\n\n        </div>\n    </div>\n\n    <textarea id=\"code-content\" class=\"code-content\"></textarea>\n</div>\n"

/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(104);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(67)();
	// imports


	// module
	exports.push([module.id, ".nav-pills li {\n    cursor: pointer;\n}\n\n.tab-content {\n    position: relative;\n}\n\n.tab-content pre {\n    background: #FFFFFF;\n}\n\n.copy-to-clipboard {\n    display: none;\n    position: absolute;\n    right: 20px;\n    z-index: 2;\n    top: 20px;\n    width: 140px;\n}\n\n.code-content {\n    overflow: hidden;\n    height: 0;\n    border: 1px solid #f8f8f8;\n}\n\n.button {\n    border: 1px solid #AAAAAA;\n    border-radius: 2px;\n    padding: 6px 10px;\n}\n\n.button:hover {\n  color: #fff;\n  background-color: #337ab7;\n}\n\n.tab-content:hover .copy-to-clipboard {\n  display: block;\n}\n", ""]);

	// exports


/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(26);
	var common_service_1 = __webpack_require__(63);
	var ChartDescriptionComponent = (function () {
	    function ChartDescriptionComponent(route, commonService) {
	        this.route = route;
	        this.commonService = commonService;
	    }
	    ChartDescriptionComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            _this.description = _this.commonService.getChartDescription(params['chartType']);
	        });
	    };
	    ChartDescriptionComponent = __decorate([
	        core_1.Component({
	            selector: 'chart-description',
	            template: "<div>{{description}}</div>"
	        }), 
	        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_service_1.CommonService])
	    ], ChartDescriptionComponent);
	    return ChartDescriptionComponent;
	}());
	exports.ChartDescriptionComponent = ChartDescriptionComponent;
	

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var router_1 = __webpack_require__(26);
	var common_service_1 = __webpack_require__(63);
	var ChartEditorComponent = (function () {
	    function ChartEditorComponent(route, commonService) {
	        this.route = route;
	        this.commonService = commonService;
	        this.datasetKeys = [];
	        this.palette = ['Default', 'Plain', 'Android', 'Soft', 'Simple', 'Egypt', 'Olive', 'Candid', 'Sulphide', 'Lint'];
	        this.uv = commonService.uv;
	    }
	    ChartEditorComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this.route.params.subscribe(function (params) {
	            // todo implement using cached data
	            _this.chartType = params['chartType'];
	            var func = _this.commonService.getChartData(_this.chartType);
	            func.subscribe(function (data) {
	                _this.graphData = data;
	                _this.datasetKeys = Object.keys(_this.graphData["dataset"]);
	            });
	        });
	    };
	    ChartEditorComponent.prototype.onValueChange = function (event) {
	        var chartDiv = document.getElementsByClassName('uv-chart-div');
	        var parent = chartDiv && chartDiv[0].parentNode;
	        parent.removeChild(chartDiv[0]);
	        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
	    };
	    ChartEditorComponent.prototype.resetAction = function (event) {
	        var chartDiv = document.getElementsByClassName('uv-chart-div');
	        var parent = chartDiv && chartDiv[0].parentNode;
	        parent.removeChild(chartDiv[0]);
	        this.graphData = this.commonService.getCachedData(this.chartType);
	        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
	    };
	    ChartEditorComponent.prototype.setColorPalette = function (color) {
	        var chartDiv = document.getElementsByClassName('uv-chart-div');
	        var parent = chartDiv && chartDiv[0].parentNode;
	        parent.removeChild(chartDiv[0]);
	        this.commonService.updatePalette(this.chartType, color);
	        this.uv.chart(this.commonService.getChartKey(this.chartType), this.graphData, this.commonService.getCachedMetaData(this.chartType));
	    };
	    ChartEditorComponent = __decorate([
	        core_1.Component({
	            selector: 'chart-editor',
	            template: __webpack_require__(107),
	            styles: [__webpack_require__(108)]
	        }), 
	        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_service_1.CommonService])
	    ], ChartEditorComponent);
	    return ChartEditorComponent;
	}());
	exports.ChartEditorComponent = ChartEditorComponent;
	

/***/ },

/***/ 107:
/***/ function(module, exports) {

	module.exports = "<div class=\"chart-editor-wrapper\">\n    <div class='color-palette-wrapper'>\n        <h4>Choose Color Palette</h4>\n        <select (change)=\"setColorPalette($event.target.value)\">\n            <option *ngFor =\"let p of palette\" [value]=\"p\"> {{p}}</option>\n        </select>\n    </div>\n    <table class=\"table\" *ngIf=\"graphData\">\n        <thead>\n        <tr>\n            <th class=\"empty-cell\"></th>\n            <th *ngFor=\"let category of graphData.categories\">{{category}}</th>\n        </tr>\n        <!--<tr>-->\n        <!--<td class=\"axisLabelCell\"></td>-->\n        <!--<td>Original</td>-->\n        <!--<td>Revised</td>-->\n        <!--<td>Original</td>-->\n        <!--<td>Revised</td>-->\n        <!--<td>Original</td>-->\n        <!--<td>Revised</td>-->\n        <!--</tr>-->\n        </thead>\n        <tbody>\n        <!--<tr *ngFor=\"let key of datasetKeys; let i=index;\">-->\n        <!--<td>{{graphData.dataset[key][i].name}}</td>-->\n        <!--<td>{{graphData.dataset[key][i].value}}</td>-->\n        <!--<td><input type=\"text\" value=\"{{graphData.dataset[key][i].value}}\"></td>-->\n        <!--<td>{{graphData.dataset[key][i+1].value}}</td>-->\n        <!--<td><input type=\"text\" value=\"{{graphData.dataset[key][i+1].value}}\"></td>-->\n        <!--<td>{{graphData.dataset[key][i+2].value}}</td>-->\n        <!--<td><input type=\"text\" value=\"{{graphData.dataset[key][i+2].value}}\"></td>-->\n        <!--</tr>-->\n        <tr>\n            <td [attr.colspan]=\"datasetKeys.length + 1\">\n                <ul class=\"category-data-list\" *ngFor=\"let i of datasetKeys\">\n                    <li class=\"category-data-list-item\" *ngFor=\"let data of graphData.dataset[i]\">\n                        <span class=\"category-data-name\">{{data.name}}</span>\n                        <!--<span class=\"category-data-value\">{{data.value}}</span>-->\n                        <span class=\"category-data-input-value\">\n                            <input type=\"text\" [(ngModel)]=\"data.value\" (change)=\"onValueChange($event)\" >\n                        </span>\n                    </li>\n                </ul>\n            </td>\n        </tr>\n\n        </tbody>\n        <tfoot>\n        <tr>\n            <td colspan=\"7\">\n                <button class=\"reset-btn btn\" (click)=\"resetAction($event)\">Reset</button>\n            </td>\n        </tr>\n        </tfoot>\n    </table>\n\n</div>\n\n"

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	
	        var result = __webpack_require__(109);

	        if (typeof result === "string") {
	            module.exports = result;
	        } else {
	            module.exports = result.toString();
	        }
	    

/***/ },

/***/ 109:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(67)();
	// imports


	// module
	exports.push([module.id, ".table {\n    /*border: 1px solid #DEDEDE;*/\n}\n\n.table td, .table th {\n    /*padding: 18px;*/\n    text-align: center;\n}\n\n.empty-cell {\n    padding: 26px;\n}\ninput {\n    width: 50px;\n    padding: 2px 4px 2px;\n    text-align: right;\n    border: 1px solid #DEDEDE;\n}\n\nul.category-data-list {\n    display: inline-block;\n    list-style: none;\n}\n\n.category-data-list span {\n    padding: 10px;\n    display: inline-block;\n    text-align: right;\n}\n\nul.category-data-list:not(:first-of-type) .category-data-name {\n    display: none;\n}\n\nspan.category-data-value {\n    width: 50px;\n}\n\nspan.category-data-input-value {\n    width: 70px;\n}\n\n.category-heading-list {\n    list-style: none;\n}\n\n.category-heading-item {\n    display: inline-block;\n}\n\nspan.category-data-name {\n    width: 150px;\n}\n\n.color-palette-wrapper select, h4{\n    display: inline;\n}\n/*ul.category-data-list:nth-child(2) span.category-data-name {*/\n    /*float: left;*/\n/*}*/\n\n/*ul.category-data-list:nth-child(2) span.category-data-input-value {*/\n    /*float: right;*/\n/*}*/\n", ""]);

	// exports


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(3);
	var components_list_1 = __webpack_require__(61);
	var ChartDetailsComponent = (function () {
	    function ChartDetailsComponent(resolver) {
	        this.resolver = resolver;
	        this.currentComponent = null;
	    }
	    Object.defineProperty(ChartDetailsComponent.prototype, "componentData", {
	        // component: Class for the component you want to create
	        // inputs: An object with key/value pairs mapped to input name/input value
	        set: function (data) {
	            if (!data) {
	                return;
	            }
	            // We create an injector out of the data we want to pass down and this components injector
	            var injector = core_1.ReflectiveInjector.fromResolvedProviders([], this.dynamicComponentContainer.parentInjector);
	            // We create a factory out of the component we want to create
	            var factory = this.resolver.resolveComponentFactory(data.component);
	            // We create the component using the factory and the injector
	            var component = factory.create(injector);
	            // We insert the component into the dom container
	            this.dynamicComponentContainer.insert(component.hostView);
	            // We can destroy the old component is we like by calling destroy
	            if (this.currentComponent) {
	                this.currentComponent.destroy();
	            }
	            this.currentComponent = component;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    __decorate([
	        core_1.ViewChild('dynamicComponentContainer', { read: core_1.ViewContainerRef }), 
	        __metadata('design:type', core_1.ViewContainerRef)
	    ], ChartDetailsComponent.prototype, "dynamicComponentContainer", void 0);
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], ChartDetailsComponent.prototype, "componentData", null);
	    ChartDetailsComponent = __decorate([
	        core_1.Component({
	            selector: 'chart-details',
	            entryComponents: [
	                components_list_1.uvComponents
	            ],
	            template: "<div #dynamicComponentContainer></div>"
	        }), 
	        __metadata('design:paramtypes', [core_1.ComponentFactoryResolver])
	    ], ChartDetailsComponent);
	    return ChartDetailsComponent;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ChartDetailsComponent;
	

/***/ }

});
//# sourceMappingURL=1.map