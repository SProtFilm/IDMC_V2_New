import { Routes } from '@angular/router';
import { IdmcComponent } from './component/idmc/idmc.component';
import { RegistrationComponent } from './regis-pages/registration/registration.component';
import { SigninComponent } from './component/signin/signin.component';
import { ScannerComponent } from './scanner-pages/scanner/scanner.component';
import { IndexComponent } from './index-pages/index/index.component';
import { TableCaseComponent } from './regis-pages/table-case/table-case.component';
import { CheckerComponent } from './checker/checker/checker.component';

export const routes: Routes = [
    
  { path: '', pathMatch: 'full', redirectTo: 'signin' },
  { path: 'idmc', component: IdmcComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'tableCase', component: TableCaseComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'index', component: IndexComponent },
  { path: 'checker', component: CheckerComponent },
];
