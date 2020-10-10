#!/usr/bin/env python3
# -*- coding: utf-8 -*-

__author__ = 'Michael Liao'

'''
async web application.

'''
import requests_async as requests
import time
import asyncio

from aiohttp import web



async def index(request):
    print("有数据请求了：" + time.strftime('%Y-%m-%d %H:%M:%S'))
    url = request.query['url']
    str = await requests.get(url,headers= {
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36'
    })
    html = str.text
    html = html.encode(str.encoding)
    html = html.decode(str.apparent_encoding,'ignore')
    print("拿到数据了")
    return web.Response(text = html)


async def init(loop):
    app = web.Application(loop=loop)
    app.router.add_route('GET', '/pachong', index)
    srv = await loop.create_server(app.make_handler(), '0.0.0.0', 8888)
    print('Server started at http://127.0.0.1:8888...')
    return srv

loop = asyncio.get_event_loop()
loop.run_until_complete(init(loop))
loop.run_forever()
