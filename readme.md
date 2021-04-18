# FiveM Live Radio

I Found an old source in LUA for this addon and thought it was cool so I rewrote it in javascript and added support for aac streams.

## Features

- Can play AAC/OGG Streams or playlists
- Files/Streams are hosted online can be changed dynamically so the client does't need to download anything
- This script is commpletely server-side it won't put any stress on the server whatsoever

## Limitations

- You -CANNOT- user HTTPS streams as fivem only loads HTTP urls (no client certificate)

## How to use

Remove the comments of default radios in `fxmanifest.lua` and change the replaceme text inside the url to whatever stream you like.

example:

```lua
supersede_radio "[ORIGINAL_RADIO_NAME]" { url = "[RADIO URL]", volume = 0.5, name = "[NEW RADIO NAME]" }
```

## What I intend to do next

- Ability to change logos and names for the channels
- Add a server channel for rp modes
