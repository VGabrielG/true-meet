
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterModule],
    templateUrl: './home.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
    contentService = inject(ContentService);
    content = this.contentService.content;
    language = this.contentService.language;
}
