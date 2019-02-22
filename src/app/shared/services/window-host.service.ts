// TODO:: Determine if any code from this service can be `cherry-picked` or not
// NOTE:: Otherwise, remove this file from project

import { isPlatformBrowser } from '@angular/common';
import { ClassProvider, FactoryProvider,
         Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

/* Create a new injection token for injecting the window into a component. */
export const WINDOW = new InjectionToken('WindowToken');

/* Define abstract class for obtaining reference to the global window object. */
export abstract class WindowRef {

  get nativeWindow(): Window | Object {
    throw new Error('Not implemented.');
  }

}

/* Define class that implements the abstract class and returns the native window object. */
@Injectable({
  providedIn: 'root'
})
export class WindowHostService extends WindowRef { // -> class BrowserWindowRef {}
  constructor() {
    super();
  }

  get nativeWindow(): Window | Object {
    return window;
  }

}

/* Create an factory function that returns the native window object. */
export function windowFactory(windowHostRef: WindowHostService, platformId: Object): Window | Object {
  if (isPlatformBrowser(platformId)) {
    return windowHostRef.nativeWindow;
  }
  return new Object();
}

// let windowFactory = (logger: Logger, userService: UserService) => {
//   return new HeroService(logger, userService.user.isAuthorized);
// };

/* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */
export const browserWindowProvider: ClassProvider = {
  provide: WindowRef,
  useClass: WindowHostService
};

/* Create an injectable provider that uses the windowFactory function for returning the native window object. */
// export const windowProvider: FactoryProvider = {
//   provide: WINDOW,
//   useFactory: windowFactory,
//   deps: [ WindowRef, PLATFORM_ID ]
// };

export const windowProvider: FactoryProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [ WindowRef, PLATFORM_ID ]
};

/* Create an array of providers. */
export const WINDOW_PROVIDERS = [
  browserWindowProvider,
  windowProvider
];
