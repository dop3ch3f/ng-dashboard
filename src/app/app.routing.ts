import { BroadcastComponent } from './broadcast/broadcast.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { RecordsComponent } from './records/records.component';
import { SupportComponent } from './support/support.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';


export const AppRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'broadcast',
        component: BroadcastComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'records',
        component: RecordsComponent
    },
    {
        path: 'support',
        component: SupportComponent
    },
    {
        path: 'notifications',
        component: NotificationsComponent
    },
    {
        path: 'upgrade',
        component: UpgradeComponent
    }
]
