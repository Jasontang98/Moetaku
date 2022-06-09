'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'Diablo Immortal Is Far Too Good To Be Free',
        body: 'Last week Blizzard launched Diablo Immortal, the next entry in its long-running, loot-driven action-RPG franchise. However, unlike previous games, this one is free-to-play, and was built from the ground up to be a mobile game first. While it did also come out on PC last week, the reality is this is a very different kind of Diablo. Between being a phone title, having F2P-style in-app purchases, and being part of a popular legacy franchise, it’s created a large debate about the game and its true cost. \n Kotaku staff writer Zack Zwiezen and editor John Walker have both been playing, so got together to chat about the game, how much they’re enjoying it, and why it might not be the evil, money-sucking monster some have claimed. At the very least, it’s a perfect way to kill some time while watching old episodes of The Simpsons.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/7eceaed2442280f171e0a9fa16c91e07.jpg',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Genshin Impact Is More Fun When You Stop Caring About Damage',
        body: 'At first glance, the Genshin Impact community seems positively obsessed with hitting the biggest possible numbers with the characters they’ve rolled from the gacha. Content creators on YouTube and TikTok regularly showcase damage totals of six or even seven figures. Online discussions are dominated by math nerds who write walls of damage equations. Whether you’re new to the game or a veteran Abyss player, not using the meta-approved competitive teams can feel like a cardinal sin. \n But chasing big numbers can lead to severe burnout, which plagues even the game’s most dedicated players. I know firsthand. While Genshin Impact was undergoing its first-ever delay this April, I undertook a deep cleanse, dropping out of grinding the battle pass and chasing the meta. I revisited characters who I hadn’t played in awhile, such as Kaeya and Chongyun. I dusted off Childe and started pairing him with Kokomi for safe and consistent damage output. Then I started getting really chaotic about using Raiden Shogun on a team with Xiao, even though his slower plunge attacks didn’t benefit as much from her signature skill.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/7bc9d154de69633957cde295d7934367.jpg',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Overworked GameStop Employees Walk Out, Tell Gamers To Shop Elsewhere',
        body: 'The GameStop in the Gateway Mall in Lincoln, Nebraska is one of the busiest around, at least according to the person who used to run it. But over the weekend it was closed after four employees decided to walk out and never return over what he says are bad working conditions and a verbally abusive district manager. It’s the second time this year a GameStop in the area saw its entire staff resign in protest. \n It’s not uncommon anymore to walk up to a GameStop and see a sign that says the store is temporarily closed while employees are on a lunch or bathroom break. Overworked and understaffed, sometimes there’s only one person working the entire store, leaving them with no other option. On Sunday, the makeshift sign outside the Gateway Mall GameStop said something different.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/8e80b09cea35f1b66cdb45502fdf643c.jpg',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Xenoblade Chronicles 3 Special Edition Pre-Orders Crash Nintendo’s Online Store',
        body: 'Nintendo opened pre-orders for the Xenoblade Chronicles 3 special edition bundle four hours ago. But since then, the online store’s been unstable as folks rush to drop money on the collector’s item. \n “We apologize for any inconvenience that you may be experiencing while attempting to pre-order the Xenoblade Chronicles 3 special edition,” Nintendo’s official Twitter account said less than 30 minutes after pre-orders opened this morning. “The My Nintendo Store is experiencing a high volume of traffic and we appreciate your patience while we look into the issue."',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/4b7c09a46141a91ad999ec7d507aa50b.jpg',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Microsoft Promises 5 More Xbox Exclusives, Game Pass Demos In The Next Year',
        body: 'Microsoft laid out some of its big plans for gaming ahead of Sunday’s Xbox and Bethesda showcase, and those plans include a steady stream of more big exclusives, expanded Game Pass perks, and bringing video game cloud streaming directly to smart TVs. Most of the plans are forward-looking, but Microsoft Gaming CEO Phil Spencer and others in Xbox leadership have given themselves roughly a year to deliver on the promises as the company tries to build on last year’s momentum. \n “Last fiscal [year] we launched 5 new games across console, PC, and cloud. We are on track to meet or exceed that amount in the next fiscal [year],” Microsoft said in a briefing to press (the company’s next fiscal year ends June 30, 2023). Head of Xbox Studios, Matt Booty, pointed to the release of games like Halo: Infinite, Forza Horizon 5, Age of Empires 4, and the console version of Flight Simulator, and said the next year of Xbox will be based on that “same regular cadence” of hit games. That might come as a shock to many, considering Microsoft still hasn’t confirmed any first-party exclusives for launch in 2022 after Starfield and Redfall were delayed until early 2023. New exclusives are one of the main draws for Game Pass, and they’re beginning to dry up.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/561767c2b9d2587ead288c8fa08ef917.jpg',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'The Human Toll Of Fallout 76’s Disastrous Launch',
        body: '“No one wanted to be on that project because it ate people. It destroyed people,” one former developer on Fallout 76 told Kotaku. “The amount of people who would go to that project, and then they would quit [Bethesda] was quite high. \n ”Kotaku spoke to 10 former employees of Bethesda and its parent company ZeniMax Media who were familiar with Fallout 76’s development, all of whom shared their accounts only under the condition of anonymity. Some sources said that they signed non-disparagement agreements upon leaving the company, and feared that ZeniMax’s influence in the industry would prevent them from being hired elsewhere.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_1315/6d4c2aae5c3e08b536570fdd376551da.jpg',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'A Promising Weekend With Halo Infinite\'s Beta',
        body: 'Over the weekend, 343 Industries let a bunch of eager players check out Halo Infinite’s first public “flight.” On paper, the flight was a technical test, meant to see how the servers perform under pressure and how bots, a series first, would stack up against real-life human players. But, really, it meant one very simple thing: We got to play freakin’ Halo Infinite! The flight formally wrapped up just a few hours ago. Obviously Kotaku’s biggest Halo fans—staff writer Ari Notis and weekend editor Zack Zweizen—had to geek out a bit about what we played.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/8952811f46d072f442bd5113b5ed1a33.jpg',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'For The Streamer From The Last Of Us Bunny Meme, Virality Led To Death Threats Over Things She Never Did',
        body: 'If Emme “Negaoryx” Montgomery’s chat moderator hadn’t gotten up to use the bathroom, six million people would not have seen what happened next. During a stream last week, a viewer asked Montgomery, “What color is your thong today?” Usually, Montgomery doesn’t acknowledge those sorts of messages. But with her mod gone, the message did not get zapped into oblivion. Instead, it just sat there and festered. So Montgomery engaged: “You absolute infant of a human,” she began. “What did you expect?” Her ensuing systematic takedown of a sexist non-joke caught fire on Twitter, doubling the size of Montgomery’s audience overnight. She was surprised, but not that surprised. She’d been there before, under very different circumstances. She is, after all, the Last Of Us dying rabbit meme girl.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/y4th2weowoxydm1dzsap.jpg',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Elden Ring Survival Mode Mod Adds Diseases, Pitch Black Nights",
        body: 'With Elden Ring over three months removed from its February launch, players are now looking for more challenging ways to experience the massive FromSoftware game. Enter a mod that introduces hunger and thirst mechanics, a whole host of region-specific diseases, and nights so dark that you need a torch to see more than a few feet ahead of you. \n Earlier this week, prolific Dark Souls modder Scott “Grimrukh” Mooney released his Elden Ring survival mode mod, which he describes as a “charity commission” for this year’s installment of an annual St. Jude Children’s Research Hospital donation drive organized by Twitch personality LobosJr (feel free to contribute here if you’re so inclined).',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/8778dba49d6ac5ffc31d2995cb081a32.jpg',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Everyone Hates Blockchain Bro's Vision For The Future Of Games",
        body: 'For some, it’s a vision of utopia. For a thousand more, it’s unmistakably a dystopia. But it’s really just a speculative LinkedIn post about the potential future of “blockchain” gaming, which has gone viral across multiple social media platforms when folks started mocking what they see as its offensively absurd predictions. \n The main character of the day is Nicolas Vereecke, an investor at Bitkraft Ventures, a venture capital firm that counts the likes of Discord, Epic Games, and a number of blockchain-based studios among its portfolio. Last week, Vereecke posted a vision of what gaming could look like nearly a decade from now, if all the promises that proponents of blockchain say will come true actually do come true.',
        imageURL: 'https://i.kinja-img.com/gawker-media/image/upload/c_fit,f_auto,g_center,pg_1,q_60,w_965/93c9fe199f087eb0916be2cd98bd2541.jpg',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Articles', null, {});
  }
};
