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
      animate(300, style({
        opacity: 1
      }))
    ]),
    transition(':leave', animate(300, style({    // elemento sai do DOM  ===  * => void
      opacity: 0
    })))
  ]);



//   export const highlightedStateTrigger = trigger('highlightedState', [
//     state('default', style({
//       border: '2px solid #B2B6FF'
//     })),
//     state('highlighted', style({
//       border: '4px solid #B2B6FF',
//       filter: 'brightness(92%)'
//     })),
//     transition('default => highlighted', [
//       animate('200ms ease-out', style({
//         transform: 'scale(1.02)'
//       })),
//       animate(200)
//     ])
//   ])