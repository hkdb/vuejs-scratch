const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/main.js',
    devServer: {
        contentBase: path.resolve(__dirname, './src/pages')
    },
    module: {
        rules: [
            {
		    test: /\.vue$/,
		    loader: "vue-loader"
            },
            {
		    test: /\.(scss|css)$/,
		    //include: /stylesheets/,
		    use: [
			    "vue-style-loader",
			    {
				    loader: 'css-loader',
				    options: { modules: true }
			    },
			    "sass-loader"
		    ]
            },
            {
		    test: /\.js$/,
		    loader: "babel-loader",
		    exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js"
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: 'bundle.js'
    }
}
