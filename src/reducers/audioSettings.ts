import { EditAudioSource, ChangeVolume } from '../actions/audio';
import { AudioSettings } from '../types';
import { EDIT_AUDIO_SOURCE, CHANGE_VOLUME } from '../constants';

const initial: AudioSettings = {
  enabled: true,
  volume: 0.5,
  audio1: new Audio(
    'http://k003.kiwi6.com/hotlink/vnu75u0sif/file-sounds-765-tweet.ogg'
  ),
  audio2: new Audio('http://k003.kiwi6.com/hotlink/85iq6xu5ul/coins.ogg')
};

type AudioAction = EditAudioSource | ChangeVolume;

export default (state = initial, action: AudioAction) => {
  let partialState: Partial<AudioSettings> | undefined;

  switch (action.type) {
    case EDIT_AUDIO_SOURCE:
      partialState = {
        [action.field]: action.value
      };
      break;
    case CHANGE_VOLUME:
      partialState = {
        volume: action.value
      };
      break;
    default:
      return state;
  }

  return { ...state, ...partialState };
};