const Discord = require('discord.js')
const bot = new Discord.Client;
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;
var sahip = ayarlar.sahip;
var token = ayarlar.token;
var versiyon = ayarlar.versiyon;
var kkomutlar = ayarlar.kk;
var banresim = ayarlar.banresim;

bot.on('ready', () => 
{
    console.log('Botunuz göreve hazır durumdadır.');
    bot.user.setActivity('Komutlar için = "p!yardım"')
}
);

bot.on('message', msg => 
{
    if(msg.content === prefix + 'yardım'){
        msg.channel.send('Şu anda kullanabilir komutlar = ' + kkomutlar);
        msg.channel.send('Komutlar hakkında daha fazla bilgi almak için, "p!bilgi{komutismi}"');
    }

    if(msg.content === prefix + 'bilgi{yardım}'){
        msg.channel.send('Bu komut, kullanılabilir komutları görmenizi sağlar.');
    }

    if(msg.content === prefix + 'versiyon'){
        msg.channel.send('Versiyonum : ' + versiyon);
    }

    if(msg.content === prefix + 'bilgi{versiyon}'){
        msg.channel.send('Bu komut, botun versiyonunu görmenizi sağlar.');
    }

    if(msg.content === prefix + 'sahip') {
        msg.channel.send('Sahibim : Yakup Ensar Sayın');
    }

    if(msg.content === prefix + 'bilgi{sahip}'){
        msg.channel.send('Bu komut, botun sahibini görmenizi sağlar.');
    }
   
}
);

bot.on('message', msg => {
    if(msg.content === 'sa'){
        msg.channel.send('Aleyküm Selam');
    }
});

bot.on('guildMemberAdd', (member) =>
{
    member.guild.channels.get('584348102962708481').send(`Sunucuya hoş geldin, ${member}!`);
});

bot.on('guildMemberRemove', (member) =>
{
    member.guild.channels.get('584459553903476763').send(`Sunucudan gittiğine üzüldük, ${member}!`);
});

bot.on('guildBanAdd', (guild, user) => {
    let ban_Yazı = guild.channels.find('name', 'yasaklananlar');
    if(!ban_Yazı) return;
    ban_Yazı.send('** Adalet dağıtmanın zamanı gelmiş. ** ' + user.username + ' bakıyorum da suç işlemiş! ' + banresim);
});


bot.login(process.env.token);
