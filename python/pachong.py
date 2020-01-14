import requests
import time
import tornado.ioloop
import tornado.web

# 爬虫-html 自动识别编码格式然后自动转码成utf-8
class MainHtml(tornado.web.RequestHandler):
    def get(self):
        print("有数据请求了：" + time.strftime('%Y-%m-%d %H:%M:%S'))
        """get请求"""
        url = self.get_argument('url')
        str = requests.get(url,headers= {
    'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
})
        html = str.text
        html = html.encode(str.encoding)
        html = html.decode(str.apparent_encoding,'ignore')
        self.write(html)


   # 这个接口是让别人来调用爬虫 返回html
if __name__ == "__main__":
    app = tornado.web.Application([(r"/pachong", MainHtml), ])
    app.listen(8888)
    print('服务启动：'+time.strftime('%Y-%m-%d %H:%M:%S'))
    tornado.ioloop.IOLoop.current().start()


