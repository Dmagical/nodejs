const os = require('os');

//platform
console.log(os.platform());

//CPU arch
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//free memory
console.log(os.freemem());

//total memory
console.log(os.totalmem());

//home directory
console.log(os.homedir());

//uptime (time your system has been up)
console.log(os.uptime());
