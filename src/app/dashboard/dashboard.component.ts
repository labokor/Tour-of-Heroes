import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'Choose your Dashboard';

  DASHBOARD_TYPES: string[] = ['HERO', 'BEEKEEPER'];

  availableLanguages: string[] = [];

  form!: FormGroup;
  languageForm!: FormGroup;

  get dashboard() {
    return this.form.get('dashboard');
  }

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    this.availableLanguages = this.loadAvailableLanguages();
    console.log(this.availableLanguages);
    this.form = new FormGroup({
      dashboard: new FormControl(this.DASHBOARD_TYPES[0]),
    });
    this.languageForm = new FormGroup({
      language: new FormControl(this.availableLanguages[0]),
    });
  }

  switchLanguage(selectedLanguage: string): void {
    this.translocoService.setActiveLang(selectedLanguage);
  }

  private loadAvailableLanguages(): string[] {
    // -- this assertion is safe as long as the available languages are provided as string[] to Transloco
    return this.translocoService.getAvailableLangs() as string[];
  }
}
