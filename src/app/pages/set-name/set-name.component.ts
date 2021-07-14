import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginParams } from '../../interfaces/login-params.interface';
import { setNameAnimations } from './set-name-animations';
import { SetNameStatus, SetNameStore } from './set-name.store';

@Component({
  templateUrl: 'set-name.component.html',
  styleUrls: ['./set-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: setNameAnimations,
})
export class SetNameComponent implements OnInit {
  setNameForm = this.formBuilder.group({
    display_name: ['', Validators.required],
    email: ['', Validators.email],
  });

  status$: Observable<SetNameStatus> = this.setNameStore.selectStatus$;
  error$: Observable<string> = this.setNameStore.error$;

  readonly SetNameStatus = SetNameStatus;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private setNameStore: SetNameStore,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const queryParams = this.route.snapshot.queryParams;

    if (!queryParams['launcher_id'] || !queryParams['authentication_token'] || !queryParams['signature']) {
      this.router.navigate(['/404']);
      return;
    }

    this.setNameStore.login(queryParams as LoginParams);
  }

  onFormSubmitted(event: Event): void {
    const formValue = this.setNameForm.value;

    this.setNameStore.setName(formValue);
    event.preventDefault();
  }
}
