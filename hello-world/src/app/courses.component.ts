import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{ text | summary:25 }}
    `
})
export class CoursesComponent {
    text = `
        blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah
    `
}