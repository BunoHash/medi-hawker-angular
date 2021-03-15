import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { SampleDemoComponent } from './demo/view/sampledemo.component';
import { FormsDemoComponent } from './demo/view/formsdemo.component';
import { DataDemoComponent } from './demo/view/datademo.component';
import { PanelsDemoComponent } from './demo/view/panelsdemo.component';
import { OverlaysDemoComponent } from './demo/view/overlaysdemo.component';
import { MenusDemoComponent } from './demo/view/menusdemo.component';
import { MessagesDemoComponent } from './demo/view/messagesdemo.component';
import { MiscDemoComponent } from './demo/view/miscdemo.component';
import { EmptyDemoComponent } from './demo/view/emptydemo.component';
import { ChartsDemoComponent } from './demo/view/chartsdemo.component';
import { FileDemoComponent } from './demo/view/filedemo.component';
import { DocumentationComponent } from './demo/view/documentation.component';
import { AppMainComponent } from './pages/app.main/app.main.component';
import { AppNotfoundComponent } from './pages/app.notfound/app.notfound.component';
import { AppErrorComponent } from './pages/app.error/app.error.component';
import { AppAccessdeniedComponent } from './pages/app.accessdenied/app.accessdenied.component';
import { AppLoginComponent } from './startup/app.login/app.login.component';
import { ConsumerRegistrationComponent } from './startup/registration/registration.component';
import { AuthGuardService } from './_services/auth-guard/auth-guard.service';




export const routes: Routes = [


    { path: 'login', component: AppLoginComponent },
    { path: 'register', component: ConsumerRegistrationComponent },
    //{path:'consumer-dashboard', loadChildren: './app/_modules/consumer/consumer.module#ConsumerModule'},
    {
        path: 'consumer',
        loadChildren: () => import('./_modules/consumer/consumer.module').then(mod => mod.ConsumerModule),
        canActivate: [AuthGuardService]
    },

    //{path:'transport-dashboard', loadChildren: './app/_modules/transport/transport.module#TransportModule'},
    {
        path: 'transport-dashboard',
        loadChildren: () => import('./_modules/transport/transport.module').then(mod => mod.TransportModule),
    },
    {
        path: "pharmacy-dashboard",
        loadChildren: () => import('./_modules/pharmacy/pharmacy.module').then(mod => mod.PharmacyModule)
    },
    { path: '**', redirectTo: '/login' },


];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });