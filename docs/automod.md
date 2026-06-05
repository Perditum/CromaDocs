# Automod

Let's just get straight into the available options.

Each automod option has its own config. You can use `>>setup automod` if you're feeling lazy and use the defaults if you want. I still recommend reading this page.

## Anti-advertisement/Referral Links
This will remove all messages with Discord invites and referral links (e.g. bit.ly). You can also assign users strikes for this.

`>>antiinvite <strike num>`

`>>antireferral <strike num>`

To disable:
`>>antiinvite OFF`

## Link Resolving
::: info
Link resolving is currently only available with Croma Pro.
:::
If a user sends a link with a link shortener, the bot will resolve it and check if the link matches any other enabled filters.

`>>resolvelinks ON/OFF`

## Anti-copypasta
::: warning
This feature is currently non-functional and will be fixed in a later version.
:::

## Anti-everyone
It's obvious in the name. This also affects roles named "everyone" and "here", but not when escaping the pings, so typing `\@everyone` and `\@here` with the backslashes is fine. 

`>>antieveryone <strike num>`

To disable:
`>>antiinvite OFF`

## Anti-duplicate
Prevents annoying spammers by blocking a certain threshold of duplicate messages.

`>>antiduplicate <strike threshold> [delete threshold] [strikes]`

So, if you used `>>antiduplicate 4 2 1`, it would start deleting on the 2nd duplicate message, and assign 1 strike for every duplicate starting with the 4th.

To disable:
`>>antiduplicate OFF`

## Max mentions
It's in the name. It's different for both roles and users, see below.

`>>maxmentions 10` would only allow 10 user pings, anything above that would get the message deleted and a strike assigned for each ping above the limit.

`>>maxmentions role 4` ditto, but for roles.

To disable:
`>>maxmentions (role) OFF`

## Max lines
It's in the name.

`>>maxlines 10` would only allow 10 lines, anything above that would get the message deleted and a strike assigned for every multiple of up-to the maximum number of lines (For example, setting the max to 10: 11-20 lines = 1 strike, 21-30 lines = 2 strikes, etc).

To disable:
`>>maxlines OFF`

## Automatic anti-raid mode
Turning this feature on will enable Anti-Raid mode if a raid is detected. Anti Raid mode kicks members when they join with a message explaining that the server is being raided. You can turn the feature on manually with `>>raidmode on/off`, but to use it automatically, read below.

You need to use the command `>>autoraidmode <joins>/<second>`, which will enable the mode if that number of joins per second is passed.

Example: running `>>autoraidmode 2/3` will enable Anti-Raid mode if 2 people join within 3 seconds.

## Automatic Dehoisting
Removes the "!" in front of members' names to prevent them from hogging the member list.

`>>autodehoist !`

To disable:
`>>autodehoist OFF`

## Filters
::: warning
Filters and related documentation are limited to Croma Pro users to prevent abuse.
:::