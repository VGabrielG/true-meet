
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
    selector: 'app-friends',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterModule],
    templateUrl: './friends.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FriendsComponent {
    contentService = inject(ContentService);
    content = this.contentService.content;
}
