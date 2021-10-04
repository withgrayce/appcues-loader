type ValueType = string | boolean | number;

type UserProperties = {
  [key: string]: ValueType;
};

type EventProperties = {
  [key: string]: ValueType;
};

export declare interface Appcues
{
  identify: (userId: string, userProperties?: UserProperties) => void;
  page: () => void;
  track: (eventName: string, eventProperties?: EventProperties) => void;
}
