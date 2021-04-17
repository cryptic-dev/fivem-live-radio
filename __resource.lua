game "GTA5"

-- Example custom radios
supersede_radio "RADIO_01_CLASS_ROCK" { url = "http://elbahdja.ice.infomaniak.ch/elbahdja-32.aac", volume = 0.2 } --alger
supersede_radio "RADIO_02_POP" { url = "http://jil-fm.ice.infomaniak.ch/jilfm.aac", volume = 0.2 } --jilfm
supersede_radio "RADIO_03_HIPHOP_NEW" { url = "http://setif.ice.infomaniak.ch/19.aac", volume = 0.2 } --setif
supersede_radio "RADIO_04_PUNK" { url = "http://radio-algerienne.com/radio/8020/raina.aac", volume = 0.2 } --rai

--aditional radios (replace the url with the stream url)

--supersede_radio "RADIO_05_TALK_01" { url = "REPLACEME", volume = 0.2 } --West Coast Talk Radio
--supersede_radio "RADIO_06_COUNTRY" { url = "REPLACEME", volume = 0.2 } --Rebel Radio
--supersede_radio "RADIO_07_DANCE_01" { url = "REPLACEME", volume = 0.2 } --Soulwax FM
--supersede_radio "RADIO_08_MEXICAN" { url = "REPLACEME", volume = 0.2 } --East Los FM
--supersede_radio "RADIO_09_HIPHOP_OLD" { url = "REPLACEME", volume = 0.2 } --West Coast Classics
--supersede_radio "RADIO_12_REGGAE" { url = "REPLACEME", volume = 0.2 } --Blue Ark
--supersede_radio "RADIO_13_JAZZ" { url = "REPLACEME", volume = 0.2 } --Worldwide FM
--supersede_radio "RADIO_14_DANCE_02" { url = "REPLACEME", volume = 0.2 } --FlyLo FM
--supersede_radio "RADIO_15_MOTOWN" { url = "REPLACEME", volume = 0.2 } --The Lowdown 91.1
--supersede_radio "RADIO_16_SILVERLAKE" { url = "REPLACEME", volume = 0.2 } --Radio Mirror Park
--supersede_radio "RADIO_17_FUNK" { url = "REPLACEME", volume = 0.2 } --Space 103.2
--supersede_radio "RADIO_18_90S_ROCK" { url = "REPLACEME", volume = 0.2 } --Vinewood Boulevard Radio
--supersede_radio "RADIO_19_USER" { url = "REPLACEME", volume = 0.2 } --Self Radio
--supersede_radio "RADIO_20_THELA" { url = "REPLACEME", volume = 0.2 } --The Lab
--supersede_radio "RADIO_11_TALK_02" { url = "REPLACEME", volume = 0.2 } --Blaine County Radio
--supersede_radio "RADIO_21_DLC_XM17" { url = "REPLACEME", volume = 0.2 } --Blonded Los Santos 97.8 FM
--supersede_radio "RADIO_22_DLC_BATTLE_MIX1_RADIO" { url = "REPLACEME", volume = 0.2 } --Los Santos Underground Radio
--supersede_radio "RADIO_34_DLC_HEI4_KULT" { url = "REPLACEME", volume = 0.2 } --Kult FM
--supersede_radio "RADIO_35_DLC_HEI4_MLR" { url = "REPLACEME", volume = 0.2 } -- The Music Locker


client_scripts {
	"data.js",
	"client.js"
}
