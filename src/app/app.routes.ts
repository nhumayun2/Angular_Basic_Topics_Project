import { Routes } from '@angular/router';
import { ComponentsComponent } from './pages/components/components.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { FormsComponent } from './pages/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
import { RoutingComponent } from './pages/routing/routing.component';
import { ServicesComponent } from './pages/services/services.component';
import { HttpComponent } from './pages/http/http.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'directives', component: DirectivesComponent },
    { path: 'forms', component: FormsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'routing', component: RoutingComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'http', component: HttpComponent }
];
