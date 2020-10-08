import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu'
// import { MatSidenavContainer } from '@angular/material/sidenav';
// import { MatSidenavContent } from '@angular/material/sidenav';
// import { MatDrawerContent } from '@angular/material/sidenav';


@NgModule({
    imports:[MatButtonModule, MatIconModule, MatFormFieldModule, 
                MatInputModule, MatDatepickerModule, MatNativeDateModule, 
                MatCheckboxModule , MatSidenavModule, MatToolbarModule, MatMenuModule ],
    exports:[MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, 
                MatDatepickerModule, MatNativeDateModule, MatCheckboxModule, 
                MatSidenavModule, MatToolbarModule, MatMenuModule ]
})

export class materialModule{

}