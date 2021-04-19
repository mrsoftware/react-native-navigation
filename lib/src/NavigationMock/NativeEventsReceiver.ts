// @ts-nocheck
import { EmitterSubscription } from 'react-native';
import {
  ComponentWillAppearEvent,
  ComponentDidAppearEvent,
  ComponentDidDisappearEvent,
  NavigationButtonPressedEvent,
  SearchBarUpdatedEvent,
  SearchBarCancelPressedEvent,
  PreviewCompletedEvent,
  ModalDismissedEvent,
  ScreenPoppedEvent,
  ModalAttemptedToDismissEvent,
} from '../interfaces/ComponentEvents';
import {
  CommandCompletedEvent,
  BottomTabSelectedEvent,
  BottomTabLongPressedEvent,
  BottomTabPressedEvent,
} from '../interfaces/Events';
import { events } from './EventsStore';

export class NativeEventsReceiver {
  navigationButtonPressedCallback: (event: NavigationButtonPressedEvent) => void;

  public registerAppLaunchedListener(callback: () => void): EmitterSubscription {
    callback();
  }

  public registerComponentWillAppearListener(
    callback: (event: ComponentWillAppearEvent) => void
  ): EmitterSubscription {
    return {
      remove: () => { }
    }
  }

  public registerComponentDidAppearListener(
    callback: (event: ComponentDidAppearEvent) => void
  ): EmitterSubscription {
    events.componentDidAppear = callback;
    return {
      remove: () => {
        events.componentDidAppear = undefined;
      }
    }
  }

  public registerComponentDidDisappearListener(
    callback: (event: ComponentDidDisappearEvent) => void
  ): EmitterSubscription {
    events.componentDidDisappear = callback;
    return {
      remove: () => { events.componentDidDisappear = undefined }
    }
  }

  public registerNavigationButtonPressedListener(
    callback: (event: NavigationButtonPressedEvent) => void
  ): EmitterSubscription {
    events.navigationButtonPressed = callback;
    return {
      remove: () => {
        events.navigationButtonPressed = undefined;
      }
    }
    // return this.emitter.addListener('RNN.NavigationButtonPressed', callback);
  }

  public registerBottomTabPressedListener(
    callback: (data: BottomTabPressedEvent) => void
  ): EmitterSubscription {
    return {
      remove: () => { }
    }
  }

  public registerModalDismissedListener(
    callback: (event: ModalDismissedEvent) => void
  ): EmitterSubscription {
    events.modalDismissed = callback;
    return {
      remove: () => { }
    }
  }

  public registerModalAttemptedToDismissListener(
    callback: (event: ModalAttemptedToDismissEvent) => void
  ): EmitterSubscription {
    return {
      remove: () => { }
    }
  }

  public registerSearchBarUpdatedListener(
    callback: (event: SearchBarUpdatedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.SearchBarUpdated', callback);
  }

  public registerSearchBarCancelPressedListener(
    callback: (event: SearchBarCancelPressedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.SearchBarCancelPressed', callback);
  }

  public registerPreviewCompletedListener(
    callback: (event: PreviewCompletedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.PreviewCompleted', callback);
  }

  public registerCommandCompletedListener(
    callback: (data: CommandCompletedEvent) => void
  ): EmitterSubscription {
    return {
      remove: () => { }
    }
  }

  public registerBottomTabSelectedListener(
    callback: (data: BottomTabSelectedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.BottomTabSelected', callback);
  }

  public registerBottomTabLongPressedListener(
    callback: (data: BottomTabLongPressedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.BottomTabLongPressed', callback);
  }

  public registerScreenPoppedListener(
    callback: (event: ScreenPoppedEvent) => void
  ): EmitterSubscription {
    // return this.emitter.addListener('RNN.ScreenPopped', callback);
  }
}