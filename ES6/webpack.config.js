module.exports={
    entry:['@babel/polyfill','./src/modulo3.js'],
    output:{
        path:__dirname+'/public',
        filename:'modulo3_exer.js'
    },
    devServer:{
        contentBase:__dirname+'/public'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            }
        ]
    }
};