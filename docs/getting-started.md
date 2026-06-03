# Getting Started

## Required Knowledge

Croma is an advanced bot, with many features for moderation. If you don't know how to use it fully, you might end up misconfiguring it and causing damage to your server. This is why you need to **read the entirety of this page and the pages linked from it** to get an initial understanding of the bot.
::: danger
Not knowing what you are doing will probably lead to a broken configuration of the bot.
:::
If you need any help with configuring, feel free to join the [support server](https://discord.gg/YCqGZrVYym).

## Requirements
::: warning
If your server does not meet these requirements, Croma will automatically leave it and send you a DM with the reason.
:::
1. Your server cannot have more bots than humans - It's pretty useless to have a server with just bots, and it wastes resources.
2. No API abuse - Please do not use the features the bot has to abuse the Discord API. The bot may be manually removed from your server if you do.
3. Discord knowledge - You should already be familiar with Discord's permission system, as this bot makes heavy use of it.
4. English - You need to have experience with English, otherwise you will struggle configuring the bot.
5. Follow Discord ToS - This one should go without saying, but breaking Discord's ToS will get the bot removed from your server.

## Installation
::: danger
READ THE ABOVE before adding Croma.
:::
To add the bot to your server, follow the link [here](https://cromabot.com/invite).

For the bot to function correctly, you need to move its role as far up as you can.

Example:
![hi](https://cdn.discordapp.com/attachments/1324543498271199295/1511832369290805248/gif.gif?ex=6a21e31d&is=6a20919d&hm=643423ec27f28173a72653b4f442e4b6ae67a01575af334a440462f3afd2fc47&)

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