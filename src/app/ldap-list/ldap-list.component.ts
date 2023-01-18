import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from "@angular/material/table";
import {UserLdap} from "../model/user-ldap";
import {LDAP_USERS} from "../model/ldap-mock-data";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";
import {MatLegacyFormFieldModule} from "@angular/material/legacy-form-field";
import {MatInputModule} from "@angular/material/input"





@Component({
  selector: 'app-ldap-list',
  templateUrl: './ldap-list.component.html',
  styleUrls: ['./ldap-list.component.scss']
})
export class LdapListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero'];
  dataSource = new MatTableDataSource<UserLdap>([]);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
    // console.log('Value on ngOnInit():');
    this.dataSource.paginator = this.paginator;
    // console.log("Mat Paginator", this.paginator);
    this.dataSource.filterPredicate = (data: UserLdap, filter: string)
      => this.filterPredicate(data, filter);
    this.getUsers();
  }

  filterPredicate(data, filter): boolean {
    return !filter || data.nomComplet.toLowerCase() === filter.startsWith(filter);
  }

  applyFilter($event: KeyboardEvent): void {
    const filterValue = ($event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getUsers(): void {
    this.dataSource.data = LDAP_USERS;
    if (this.unactiveSelected) {
      this.dataSource.data = this.dataSource.data.filter(user => user.active === false
      );
    }
  }
  unactiveChanged($event: MatSlideToggleChange): void {
    this.unactiveSelected = $event.checked;
    this.getUsers();
  }
  ngAfterViewInit(): void {
    console.log('Values on ngAfterViewInit():');
    console.log("Mat Paginator:", this.paginator);
  }
}
