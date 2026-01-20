
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { CoupleComponent } from './pages/couple/couple.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'dates', component: CoupleComponent },
    { path: '**', redirectTo: '' }
];
