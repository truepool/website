import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { DiscordComponent } from './discord.component';

/**
 * This module is here to avoid contaminating rest of the code with NO_ERRORS_SCHEMA.
 */
@NgModule({
  declarations: [DiscordComponent],
  exports: [DiscordComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DiscordModule {
}
