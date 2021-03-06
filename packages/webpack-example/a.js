const fs = require('fs')
const { connect } = require('http2')
const path = require('path')

const rootPath = path.resolve(__dirname,'./my-plugin/dist')

const dirs =  fs.readdirSync(rootPath)

dirs.forEach(dir=>{
    fs.stat(rootPath+`/${dir}`,(err,stat)=>{
        if(err)return
        if(stat.isDirectory()){
            // console.log(rootPath+`/${dir}`)
            const tarDirs =  fs.readdirSync(rootPath+`/${dir}`)
            tarDirs.forEach(file=>{
            let content =  fs.readFileSync(rootPath+`/${dir}/${file}`,'utf-8')
                console.log(content)
            })
            // tarDirs.forEach()
        }
    })
    // fs.readFileSync(path.resolve(__dirname,'./dist/'+)) 
})