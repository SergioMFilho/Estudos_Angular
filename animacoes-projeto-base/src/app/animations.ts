import { animate, state, style, transition, trigger } from "@angular/animations";

export const highlightedStateTrigger = trigger('highlightedState', [
    state('default', style({
        border: '2px solid #B2B6FF',
        scale: '1.0'
    })),
    state('highlighted', style({
        border: '2px solid blue',
        filter: 'brightness(97%)',
        scale: '1.04'
    })),
    transition('* => highlighted', animate('300ms ease-in')), // estado inicial => estadoFinal,
    transition('highlighted => *', animate('300ms ease-out'))
])

export const showStateTrigger = trigger('showState', [
    transition(':enter', [      // elemento aparece no DOM  ===  void => *
      style({
        opacity: 0
      }),
      animate(500, style({
        opacity: 1
      }))
    ]),
    transition(':leave', animate(10, style({    // elemento sai do DOM  ===  * => void
      opacity: 0
    })))
  ]);

export const showIllustrationTrigger = trigger('showIllustration', [
    transition(':enter', [      // elemento aparece no DOM  ===  void => *
      style({
        opacity: 0
      }),
      animate(600, style({
        opacity: 1
      }))
    ]),
    transition(':leave', animate(10, style({    // elemento sai do DOM  ===  * => void
      opacity: 0
    })))
  ]);

export const checkButtonTrigger = trigger('checkButton', [
    transition('* => checked', [
        animate('400ms 200ms ease-in', style({
            transform: 'scale(0.4)'
        })),
    ]),
]);

// export const highlightedStateTrigger = trigger('highlightedState', [
//   state('default', style({
//       border: '2px solid #B2B6FF',
//       transform: 'scale(1)'
//   })),
//   state('highlighted', style({
//       border: '2px solid blue',
//       filter: 'brightness(97%)',
//       transform: 'scale(1.04)'
//   })),
//   transition('* => highlighted', animate('200ms ease-in')),
//   transition('highlighted => *', animate('200ms ease-out'))
// ]);