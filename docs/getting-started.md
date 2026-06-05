# Getting Started

## Installation
::: warning
Please make sure you have read the prerequesites, Croma may leave your server if you don't meet the requirements.
:::
To add the bot to your server, follow the link [here](https://cromabot.com/invite).

For the bot to function correctly, you need to move its role as far up as you can.

Example:
![if you can see this the gif hasnt loaded yet](https://cdn.s3web.perditum.com/gif.gif)

## Configuration
Now we can start configuring the bot!
First, make sure all your channels are setup and won't change in the near future. If they will, finish that, then setup the channels then come back.

### Role Configuration
To setup the Muted role, which will prevent people from talking, use `>>setup mutedrole`. Everytime you create new channels, you must rerun this command to add the overrides for that new channel.

You will need to setup a mod role which will be able to use functions of the bot. Run `>>modrole <role name/ping>` to set it.

### Log Configuration
Now, you will want to setup log channels. You can either have one channel for everything, or seperate channels. The available log commands are:
- `>>modlog <#channel>`
- `>>messagelog <#channel>`
- `>>serverlog <#channel>`
- `>>voicelog <#channel>` (Pro required)
- `>>avatarlog <#channel>` (Not yet available)
Optionally, you may set a timezone with `>>timezone`, but this is not required.

## Congratulations!
You now have a basic Croma setup you can use with your server. Commands like `>>mute`, `>>ban`, `>>kick` will now work out-of-the-box. If you want to use the strike system (which you most likely want), go to the [next page](strike-system).