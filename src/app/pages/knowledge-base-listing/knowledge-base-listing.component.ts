import { ChangeDetectionStrategy, Component } from '@angular/core';
import { groupBy } from 'lodash';
import { contentDirectory } from '../../../content/content-directory';

@Component({
  templateUrl: 'knowledge-base-listing.component.html',
  styleUrls: ['./knowledge-base-listing.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KnowledgeBaseListingComponent {
  readonly allowedPrefix = 'kb/';

  readonly groupedContentDirectory = groupBy(
    contentDirectory.filter((item) => item.url.startsWith(this.allowedPrefix)),
    (item) => item.category,
  );
}
