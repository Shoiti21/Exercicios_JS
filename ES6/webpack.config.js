module.exports={
    entry:'./src/modulo2.js',
    output:{
        path:__dirname+'/public',
        filename:'modulo2_exer.js'
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