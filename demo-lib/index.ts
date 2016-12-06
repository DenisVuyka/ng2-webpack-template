import { NgModule } from '@angular/core';
import { SampleComponent } from './src/sample.component';

@NgModule({
    declarations: [
        SampleComponent
    ],
    exports: [
        SampleComponent
    ]
})
export class DemoLibModule {}