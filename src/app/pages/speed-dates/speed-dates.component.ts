
import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
    selector: 'app-speed-dates',
    standalone: true,
    imports: [CommonModule, NgOptimizedImage, RouterModule],
    templateUrl: './speed-dates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpeedDatesComponent {
    contentService = inject(ContentService);
    content = this.contentService.content;
}
