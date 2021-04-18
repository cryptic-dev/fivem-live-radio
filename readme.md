# FiveM Live Radio

I Found an old source in LUA for this addon and thought it was cool so I rewrote it in javascript and added support for aac streams.

## Features

- Can play AAC/OGG Streams or playlists
- Files/Streams are hosted online and can be changed dynamically so the client does't need to download anything
- This script is commpletely server-side it won't put any stress on the server whatsoever

## Limitations

- ~~You -CANNOT- user HTTPS streams as fivem only loads HTTP urls (no client certificate)~~ https is now supported error was due to mixed content

## Note

- Don't use high-bandwidth streams (128kb max is preferred) as not to stress clients with poor internet connections
- A delay of (1-5s) can occur when changing channels depedning on the clients internet speed or the streams condition

## How to use

- Dwonload [files](https://github.com/cryptic-dev/fivem-live-radio/releases/download/1.0.0/fivem-live-radio.zip/)
- Extract them into a folder named radio (for conveniece) inside your resources directory
- Remove the comments of default radios in `fxmanifest.lua` and change the replaceme text inside the url to whatever stream you like.

example:

```lua
supersede_radio "[ORIGINAL_RADIO_NAME]" { url = "[RADIO URL]", volume = 0.5, name = "[NEW RADIO NAME]" }
```

- Register the addon on your `'server.cfg'` file by using ensure radio
- If you dont want to restart your server use `refresh` then `start radio` in your fivem console while server is running

## What I intend to do next

- Ability to change logos and names for the channels
- Add a server channel for rp modes
