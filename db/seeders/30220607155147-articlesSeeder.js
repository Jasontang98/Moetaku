'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'Diablo Immortal Is Far Too Good To Be Free',
        body: 'Last week Blizzard launched Diablo Immortal, the next entry in its long-running, loot-driven action-RPG franchise. However, unlike previous games, this one is free-to-play, and was built from the ground up to be a mobile game first. While it did also come out on PC last week, the reality is this is a very different kind of Diablo. Between being a phone title, having F2P-style in-app purchases, and being part of a popular legacy franchise, it’s created a large debate about the game and its true cost. Kotaku staff writer Zack Zwiezen and editor John Walker have both been playing, so got together to chat about the game, how much they’re enjoying it, and why it might not be the evil, money-sucking monster some have claimed. At the very least, it’s a perfect way to kill some time while watching old episodes of The Simpsons.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/7eceaed2442280f171e0a9fa16c91e07.jpg',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Genshin Impact Is More Fun When You Stop Caring About Damage',
        body: 'At first glance, the Genshin Impact community seems positively obsessed with hitting the biggest possible numbers with the characters they’ve rolled from the gacha. Content creators on YouTube and TikTok regularly showcase damage totals of six or even seven figures. Online discussions are dominated by math nerds who write walls of damage equations. Whether you’re new to the game or a veteran Abyss player, not using the meta-approved competitive teams can feel like a cardinal sin. But chasing big numbers can lead to severe burnout, which plagues even the game’s most dedicated players. I know firsthand. While Genshin Impact was undergoing its first-ever delay this April, I undertook a deep cleanse, dropping out of grinding the battle pass and chasing the meta. I revisited characters who I hadn’t played in awhile, such as Kaeya and Chongyun. I dusted off Childe and started pairing him with Kokomi for safe and consistent damage output. Then I started getting really chaotic about using Raiden Shogun on a team with Xiao, even though his slower plunge attacks didn’t benefit as much from her signature skill.',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Best Sex Games On Steam, According To OnlyFans Creators',
        body: 'If Steam’s huge list of sex games is a gated, glistening community pool, I am the discarded, embarrassing flamingo float, doomed to skim the surface for all eternity. I make attempts to dive in—I look at each 2D succubus thumbnail carefully and determine whether or not demon porn is against my core values. I carefully consider “about” sections, which explain in didactic detail why this game’s anime girlfriend with big tits is better than that game’s anime girlfriend with big tits. I nod my head and pretend to understand where to start with all this, how to evade everything titled some variation of “Yummy Mommy Butt” and find the good stuff. But I don’t understand—I am a metaphorical pink flamingo pool floatie. You’re metaphorically one of those foam pool noodles that dogs and babies chew on. You might be unsure of where to start with Steam’s NSFW games like me, or perhaps you’re searching for a new favorite. Maybe you’re just curious about what horny games OnlyFans’ enterprising lewd creators like to play. Well, pool noodle, you’re in luck. To get to the bottom of Steam’s infinite slutty options, I asked a few NSFW OnlyFans gamers for their NSFW recommendations and got a range of funny, pretty, X-rated titles back. We will no longer have to swim through Steam aimlessly; we now have a plan. Read on to discover it.',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
