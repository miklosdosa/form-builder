type EventName = "onLeaveForm" | "onStepSubmit" | "other";

interface EventDetailMap {
  onLeaveForm: ConfirmEventDetail;
  onStepSubmit: ConfirmEventDetail;
  other: {
    other: string;
  };
}

type ConfirmEventDetail = {
  proceed?: () => void;
  cancel?: () => void;
};

function subscribe<K extends EventName>(
  eventName: K,
  listener: (event: CustomEvent<EventDetailMap[K]>) => void
) {
  document.addEventListener(eventName, listener as EventListener);
}

function unsubscribe<K extends EventName>(
  eventName: K,
  listener?: (event: CustomEvent<EventDetailMap[K]>) => void
) {
  document.removeEventListener(eventName, listener as EventListener);
}

function publish<K extends EventName>(eventName: K, data: EventDetailMap[K]) {
  const event = new CustomEvent<EventDetailMap[K]>(eventName, { detail: data });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
export type { EventName, ConfirmEventDetail };
