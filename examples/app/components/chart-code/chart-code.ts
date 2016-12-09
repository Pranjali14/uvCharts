import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Http } from '@angular/http';

@Component({
    selector: 'chart-code',
    templateUrl: 'chart-code.html',
    styleUrls: ['chart-code.css']
})

export class ChartCodeComponent implements OnInit {

    typescriptCode: string;
    cssCode: string;
    htmlCode: string;
    activeTab: string;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private http: Http) {
    }


    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.populateDescription(params['chartType']);
        });

        this.activeTab = 'ts';
    }

    populateDescription(chartType) {
        if (chartType) {
            this.populateFileData(chartType, 'ts').subscribe(code => {
                this.typescriptCode = code;
                setTimeout(function name() {
                    let w: any = window;
                    w.SyntaxHighlighter.highlight();
                }, 100);
            });
            this.populateFileData(chartType, 'css').subscribe(code => this.cssCode = code);
            // this.populateFileData(chartType, 'html').subscribe(code => this.htmlCode = code);
        }
    }

    populateFileData(chartType, suffix) {
        let filePath = 'app/components/' + chartType + '/' + chartType + '.' + suffix;
        return this.http.get(filePath).map(this.extractData);
    }

    private extractData(res: any) {
        return res._body;
    }

    private checkVisibility() {
        let code;
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
    }

    showTab(tab) {
        this.activeTab = tab;
    }

    isCurrentTab(tab) {
        return this.activeTab === tab;
    }

    copyToClipboard(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        let textarea: any = document.getElementById('code-content');
        let code: string = '';

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
        } catch (e) {
            console.error(e);
        }
    }

    blurAction(event) {
        let target = event.target || event.srcElement || event.currentTarget;
        target.innerHTML = 'Copy to clipboard';
    }
}