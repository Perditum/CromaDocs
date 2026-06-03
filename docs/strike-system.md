# Strike System

## What are strikes?
Strikes are a "point system" of sorts for misbehavior. The more strikes a user has, the more they are limited on the server. Server admins set up punishments for strikes using the `>>punishments` command.

To strike a user, you would run `>>strike [num of strikes] <@user(s)> <reason>` (number of strikes is optional). To take away strikes, it's the same format, but replace `>>strike` with `>>pardon`.

## How do I set up punishments for strikes?
You can use the `>>punishment` command! You can run the command without any arguments to see the syntax, but here it is in case you're lazy.

Syntax: `>>punishment <number of strikes needed for punishment> <action> [time (only needed for mutes or bans)]`

Possible actions include:
- None (remove existing action)
- Kick (obvious)
- Mute (requires time otherwise it's a permanent mute)
- Softban (for all you kids out there, this is when you ban someone and then instantly unban them to get rid of their recent messages)
- Ban (obvious, accepts time as an argument)

## How do I automatically give out strikes?
That brings me to the next section, [automod](automod)!