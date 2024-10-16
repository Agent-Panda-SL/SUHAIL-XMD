const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94759404990";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94759404990,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_08_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgzLFxuICAgICAgICA4OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcsXG4gICAgICAgIDMzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIzLFxuICAgICAgICA2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDYxLFxuICAgICAgICA0MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDU3LFxuICAgICAgICA3NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDY1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDg2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODYsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MixcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDMsXG4gICAgICAgIDgzLFxuICAgICAgICAzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICA5LFxuICAgICAgICA2NixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMTk2LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDc5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMCxcbiAgICAgICAgNDksXG4gICAgICAgIDUyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDczLFxuICAgICAgICAxMDcsXG4gICAgICAgIDksXG4gICAgICAgIDQzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4LFxuICAgICAgICA5NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDMyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDc3LFxuICAgICAgICAyMixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJacFFLeE1kTWlsd3hzWlpZNTNiZnEvMnNGOCtnNW85TFZBZWNVMWp5K29vPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJRcUhDbUNGVFR4U3ZnbHNsSS15Y1ZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjZTI2MjE4LTAyZmItNDlkNy05YjhlLTBlMjg5MDg2NmNiZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAzMyxcbiAgICAgIDE5OCxcbiAgICAgIDQ1LFxuICAgICAgOTQsXG4gICAgICAyMTEsXG4gICAgICAxOTMsXG4gICAgICAxNzcsXG4gICAgICAxNjksXG4gICAgICAyMjIsXG4gICAgICAxOTYsXG4gICAgICAxODUsXG4gICAgICAxNjAsXG4gICAgICAxMTgsXG4gICAgICA5NyxcbiAgICAgIDIyOCxcbiAgICAgIDEwMyxcbiAgICAgIDEzMixcbiAgICAgIDU1LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTEsXG4gICAgICAxMDUsXG4gICAgICAxODEsXG4gICAgICAxODQsXG4gICAgICA2NCxcbiAgICAgIDEwLFxuICAgICAgMTU2LFxuICAgICAgMTY5LFxuICAgICAgNTMsXG4gICAgICAxMTYsXG4gICAgICAxNyxcbiAgICAgIDY2LFxuICAgICAgNzcsXG4gICAgICA5MyxcbiAgICAgIDUyLFxuICAgICAgMTM0LFxuICAgICAgMTQsXG4gICAgICA5LFxuICAgICAgMjQ3LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkU3WDdNRkREXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc1OTQwNDk5MDo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFnZW50IFBhbmRhXCIsXG4gICAgXCJsaWRcIjogXCIyNDc0MDM0NzA5NDYzMzg6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTmJ2a0tBREVPbmx2N2dHR0RrZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJEVkowN3U3OXFTRTZFZ0ZzaDZSSEQzSWg2U3JYWW11V1lhVlhCeWxSNFRFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIllEZmJtdnVTTm4yTHBFZTZBSnZWNU0wdXFLNVJmblRIWlpzK2lRNTB4MFoxZ0wrb0VWOGVZRFN3S3A0MnZRK0x1UHhRQ1ZpTVl4RXBLRG80Z1VVV0R3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlBmbHZFbVpwdkI0a3FIQW9JclZHdlpka3pFK3NMVFVKd01lRTBaQ2habWpyVzdLQkZJQWE3RXY0YzBQRmhKbWdjTGR4V1pmMjY2VW15TGx0aWZTamlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzU5NDA0OTkwOjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwOTg0NzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFaEFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVoQS5qc29uIjogIntcImtleURhdGFcIjpcIkFoRlpKVWt5R1ZISll4YVJBMVkvNHNJTFRlNzFWbjhiZnl1dHRqTEp3eHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODcyNjkxNjcwLFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMywxMSwxMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Sanuka Mintharu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
