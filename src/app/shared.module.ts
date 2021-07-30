import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentLoaderComponent } from "./components/content-loader/content-loader.component";
import { XchPipe } from "./pipes/xch.pipe";

const COMPONENTS = [ContentLoaderComponent]
const PIPES = [XchPipe]

@NgModule({
    imports: [CommonModule],
    declarations: [...COMPONENTS, ...PIPES],
    exports: [CommonModule, ...COMPONENTS, ...PIPES]
})
export class SharedModule {}