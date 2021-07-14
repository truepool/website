import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { SetNameStatus } from './set-name.store';

const timing = '2s ease-in';

export const setNameAnimations = [
  trigger('robotShadow', [
    state('*', style({
      height: '0%',
    })),
    state(SetNameStatus.LoggedIn, style({
      height: '100%',
    })),
    state(SetNameStatus.LoggingIn, style({
      height: '100%',
    })),
    state(SetNameStatus.Error, style({
      height: '100%',
    })),
    transition('* => *', [animate(timing)]),
  ]),
  trigger('robotReal', [
    state('*', style({
      height: '0%',
    })),
    state(SetNameStatus.SettingName, style({
      height: '100%',
    })),
    state(SetNameStatus.NameSet, style({
      height: '100%',
    })),
    transition('* => *', [animate(timing)]),
  ]),
  trigger('scanningLine', [
    state('*', style({
      top: '0',
    })),
    state(SetNameStatus.SettingName, style({
      top: '100%',
    })),
    state(SetNameStatus.NameSet, style({
      top: '100%',
      opacity: 0,
    })),
    transition('* => *', [animate(timing)]),
  ]),
];
