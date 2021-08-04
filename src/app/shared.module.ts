import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContentLoaderComponent } from "./components/content-loader/content-loader.component";
import { XchPipe } from "./pipes/xch.pipe";

const components = [ContentLoaderComponent]
const pipes = [XchPipe]

@NgModule({
    imports: [CommonModule],
    declarations: [...components, ...pipes],
    exports: [CommonModule, ...components, ...pipes]
})
export class SharedModule {}