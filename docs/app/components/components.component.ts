import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, Route } from '@angular/router';

@Component({
    selector: 'hc-demo-components',
    templateUrl: './components.component.html'
})
export class ComponentsComponent {

    thisPage = 'Accordion';

    constructor( private activatedRoute: ActivatedRoute, private router: Router ) {
        // Listen for vertical tab bar navigation and update the select component
        router.events.subscribe((event) => {
            if ( event instanceof NavigationEnd ) {
                if ( activatedRoute.firstChild ) {
                    this.thisPage = activatedRoute.firstChild.snapshot.data['title'];
                }
            }
        });
    }

    // Handle changes to the select component and navigate
    selectUpdate ( event: any ) {
        let root = this.activatedRoute.routeConfig;
        if ( root && root.children ) {
            for ( let entry of root.children ) {
                if ( entry.data && event === entry.data.title ) {
                    this.router.navigate(['/components/' + entry.path]);
                    break;
                }
            }
        }
    }
}