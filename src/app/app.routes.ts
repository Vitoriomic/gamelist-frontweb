import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PlatformlistComponent } from './components/platformlist/platformlist.component';
import { AdventurelistComponent } from './components/adventurelist/adventurelist.component';

export const routes: Routes = [

    {
        path: "",
        component: WelcomeComponent
    },

    {
        path: "welcome",
        component: WelcomeComponent
    },

    {
        path: "home",
        component: HomeComponent
    },

    {
        path: "adventure-list",
        component: AdventurelistComponent
    },

    {
        path: "platform-list",
        component: PlatformlistComponent
    },

];
