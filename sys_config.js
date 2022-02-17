const importer = require ("phptojs");


importer.(loop)=>{
  sys.linux("FALSE") // for linux or kali linux
  sys.windows("TRUE") // for windows 8 to 11
  sys.mac("FALSE") // for mac os (all versions)
  
}


if sys == linux=>{
  sys.init(linux)
}
else if sys == windows=>{
  sys.init(windows)
}
else sys.init(mac)




.export[sys]
