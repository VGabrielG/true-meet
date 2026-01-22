
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { CoupleComponent } from './pages/couple/couple.component';
import { SpeedDatesComponent } from './pages/speed-dates/speed-dates.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'dates', component: CoupleComponent },
    { path: 'speed_dates', component: SpeedDatesComponent },
    { path: '**', redirectTo: '' }
];
