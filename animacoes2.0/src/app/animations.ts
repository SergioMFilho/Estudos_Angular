import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const highlightedStateTrigger = trigger('highlightedState', [
  state('default', style({
    border: '2px solid #B2B6FF'
  })),
  state('highlighted', style({
    border: '2px solid blue',
    filter: 'brightness(92%)'
  })),
  transition('default => highlighted', 
    animate('200ms ease-out')
  )
])

export const shownStateTrigger = trigger('shownState', [
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate(300, style({
      opacity: 1
    }))
  ]),
  transition(':leave', [
    animate(300, style({
      opacity: 0
    }))
  ])
])

export const checkButtonTrigger = trigger('checkButton', [
  transition('* => checked', [
    animate('400ms ease-in', style({
      transform: 'scale(0.4)'
    }))
  ])
])

export const filterTrigger = trigger('filterAnimation', [
  transition(':enter', [
    style({ opacity: 0, width: 0 }),
    animate('700ms ease-out', keyframes([
      style({
        offset: 0,
        opacity: 0,
        width: 0
      }),
      style({
        offset: 0.8,
        opacity: 0.5,
        width: '*',
        backgroundColor: 'lightgreen'
      }),
      style({
        offset: 1,
        opacity: 1,
        width: '*',
        backgroundColor: 'lightgreen'
      })
    ]))
  ]),
  transition(':leave', [
    animate('200ms ease-out', style({ opacity:0, width: 0 }))
  ])
])