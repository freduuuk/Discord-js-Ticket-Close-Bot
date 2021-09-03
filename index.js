/**
 * @INFO
 * Bot Coded by Freduuuk#9999
 * Please mention Him when you use this code!
 * @INFO
 */


const Discord = require('discord.js')
const client= new Discord.Client()
const disbut = require('discord-buttons')
const config = require('./config.json')
disbut(client)

//Client Ready

client.on('ready', (async) =>{
    console.log(`${client.user.username} ist nun Online!`)
    client.user.setPresence({
        status:'online'
    })
})
//Message Event
client.on('message', async message => {
    
    if(!message.content || !message.guild || message.author.bot) return;
    let parts = message.content.split(" ");


    //Close Command
   
        if(parts[0]== config.prefix+'close'){
            //Category 1 (c1)
            if(message.channel.parent!= message.guild.channels.cache.find(ct => ct.id === config.ticketcategorys.c1  && ct.type === "category") ){
                //Category 2 (c2)
                if(message.channel.parent!= message.guild.channels.cache.find(ct => ct.id === ct.id === config.ticketcategorys.c2  && ct.type === "category")){
                    //Category 3 (c3)
                    if(message.channel.parent!= message.guild.channels.cache.find(ct => ct.id === ct.id === config.ticketcategorys.c3  && ct.type === "category"))
                       
                return message.reply('This is not a ticket!')}}

                //Create the buttons
                let close = new disbut.MessageButton()
                .setID('close')
                .setLabel('Close')
                .setEmoji('🔒')
                .setStyle('green')
                let notclose = new disbut.MessageButton()
                .setID('notclose')
                .setLabel('Dont close!')
                .setEmoji('❌')
                .setStyle('red')

                //Create the Row for the buttons

                let row1 = new disbut.MessageActionRow()
                .addComponents([close,notclose])

                //Create the embed
                const sure2close = new Discord.MessageEmbed()
                .setTitle(`Are you sure to close this ticket?`)
                .setColor('YELLOW')
                .setTimestamp()
                .setFooter(message.guild.name+ 'Script from freduuuk#9999')
                message.reply(sure2close, row1).then(msg=>{

                    //Create the colletor

                    let collector = new disbut.ButtonCollector(msg, button=>button.clicker.id == message.author.id, {max:1,time:150000})
                    collector.on("collect",button=>{

                        //WHat the buttons should do

                        if(button.id=='close'){
                            Close()
                            button.reply.defer()
                        }
                        if(button.id=='notclose'){
                            button.reply.send(':x: Stopped')
                        }

                    })

                })


                //Function for the 'close' button
                        async function Close(){
                            const embed6 = new Discord.MessageEmbed()
                            .setTitle('This Ticket will be closed soon!')
                            .setColor('GREEN')
                            .setFooter(message.guild.name+ 'Script from freduuuk#9999')
                    message.channel.send(embed6).then(cc =>{
                        cc.channel.setName('closed! Deleteing soon...')
                        setTimeout(function(){
                            cc.channel.delete()
                        },5000)
                    })
                }
                }
        })

        //Login into the bot
client.login(config.token)

/**
 * @INFO
 * Bot Coded by Freduuuk#9999
 * Please mention Him when you use this code!
 * @INFO
 */