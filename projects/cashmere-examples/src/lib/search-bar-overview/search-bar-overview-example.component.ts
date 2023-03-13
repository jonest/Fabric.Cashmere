import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'hc-search-bar-overview-example',
    templateUrl: 'search-bar-overview-example.component.html',
    styleUrls: ['search-bar-overview-example.component.scss']
})
export class SearchBarOverviewExampleComponent {
    placeholder = "Search";
    disabled = false;
    showSearchIcon = true;
    showClearIcon = true;
    autoSearch = true;
    output = "";
    styleControl = new FormControl("normal");

    search(term: string): void {
        this.output += `Search for '${term}'\n`;
    }
}
