import React from "react";
import Routes from "../components/Routes";
import {StaticRouter} from "react-router-dom";
import {renderToString} from "react-dom/server";
import {Provider} from 'react-redux'
import serialize from 'serialize-javascript'
import {renderRoutes} from 'react-router-config'
import {Helmet} from 'react-helmet'
export default (req,store,context) =>
{

    const content=renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
        )

    const helmet=Helmet.renderStatic();

    return `<html>
                <head>
                ${helmet.title.toString()}
                ${helmet.meta.toString()}
                <link rel="stylesheet" href="/main.css">
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.INITIAL_STATE = ${serialize((store.getState()))}
                    </script>
                    <script src="/bundle.js">
                    </script>
                </body>
            </html>`
}