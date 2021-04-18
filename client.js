const availableRadios = [
  "RADIO_01_CLASS_ROCK",
  "RADIO_02_POP",
  "RADIO_03_HIPHOP_NEW",
  "RADIO_04_PUNK",
  "RADIO_05_TALK_01",
  "RADIO_06_COUNTRY",
  "RADIO_07_DANCE_01",
  "RADIO_08_MEXICAN",
  "RADIO_09_HIPHOP_OLD",
  "RADIO_12_REGGAE",
  "RADIO_13_JAZZ",
  "RADIO_14_DANCE_02",
  "RADIO_15_MOTOWN",
  "RADIO_16_SILVERLAKE",
  "RADIO_17_FUNK",
  "RADIO_18_90S_ROCK",
  "RADIO_19_USER",
  "RADIO_20_THELAB",
  "RADIO_11_TALK_02",
  "RADIO_21_DLC_XM17",
  "RADIO_22_DLC_BATTLE_MIX1_RADIO",
  "RADIO_34_DLC_HEI4_KULT",
  "RADIO_35_DLC_HEI4_MLR",
];

const customRadios = [];
let isPlaying = false;
let index = -1;
let volume = GetProfileSetting(306) / 10;
let previousVolume = volume;

for (
  let i = 0, length = GetNumResourceMetadata("radio", "supersede_radio");
  i < length;
  i++
) {
  const radio = GetResourceMetadata("radio", "supersede_radio", i);

  if (!availableRadios.includes(radio)) {
    console.error(`radio: ${radio} is an invalid radio.`);
    continue;
  }

  try {
    const data = JSON.parse(
      GetResourceMetadata("radio", "supersede_radio_extra", i)
    );
    if (data !== null) {
      customRadios.push({
        isPlaying: false,
        name: radio,
        data: data,
      });
      if (data.name) {
        AddTextEntry(radio, data.name);
      }
    } else {
      console.error(`radio: Missing data for ${radio}.`);
    }
  } catch (e) {
    console.error(e);
  }
}

RegisterNuiCallbackType("radio:ready");
on("__cfx_nui:radio:ready", (data, cb) => {
  SendNuiMessage(
    JSON.stringify({ type: "create", radios: customRadios, volume: volume })
  );
  previousVolume = -1;
});
SendNuiMessage(
  JSON.stringify({ type: "create", radios: customRadios, volume: volume })
);

const PlayCustomRadio = (radio) => {
  isPlaying = true;
  index = customRadios.indexOf(radio);
  ToggleCustomRadioBehavior();
  SendNuiMessage(JSON.stringify({ type: "play", radio: radio.name }));
};

const StopCustomRadios = () => {
  isPlaying = false;
  ToggleCustomRadioBehavior();
  SendNuiMessage(JSON.stringify({ type: "stop" }));
};

const ToggleCustomRadioBehavior = () => {
  SetFrontendRadioActive(!isPlaying);

  if (isPlaying) {
    StartAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
  } else {
    StopAudioScene("DLC_MPHEIST_TRANSITION_TO_APT_FADE_IN_RADIO_SCENE");
  }
};

setTick(() => {
  if (IsPlayerVehicleRadioEnabled()) {
    let playerRadioStationName = GetPlayerRadioStationName();

    let customRadio = customRadios.find((radio) => {
      return radio.name === playerRadioStationName;
    });

    if (!isPlaying && customRadio) {
      PlayCustomRadio(customRadio);
    } else if (
      isPlaying &&
      customRadio &&
      customRadios.indexOf(customRadio) !== index
    ) {
      StopCustomRadios();
      PlayCustomRadio(customRadio);
    } else if (isPlaying && !customRadio) {
      StopCustomRadios();
    }
  } else if (isPlaying) {
    StopCustomRadios();
  }

  volume = GetProfileSetting(306) / 10;
  if (previousVolume !== volume) {
    SendNuiMessage(JSON.stringify({ type: "volume", volume: volume }));
    previousVolume = volume;
  }
});
