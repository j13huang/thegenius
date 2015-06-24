import os.path
import tornado.ioloop
import tornado.web
import tornado.options

class MainHandler(tornado.web.RequestHandler):

    #def __init__(self):
        #tornado.web.RequestHandler.__init__(self)
        #self.is_closing = False

    def get(self):
        #self.write("Hello, world")
        self.render('index.html', actions=[])

if __name__ == '__main__':
    GAME_GROUP = 'game'
    tornado.options.define("port", default=8888, type=int)
    tornado.options.define("players", default=11, type=int, group=GAME_GROUP)
    tornado.options.define("straight", default=5, type=int, group=GAME_GROUP)
    tornado.options.parse_command_line()
    args = tornado.options.options.group_dict(GAME_GROUP)
    print tornado.options.options.players
    print tornado.options.options.straight

    application = tornado.web.Application(
            [
                (r'/', MainHandler)
                ],
            cookie_secret="test",
            template_path=os.path.join(os.path.dirname(__file__), 'templates'),
            static_path=os.path.join(os.path.dirname(__file__), 'static'),
            xsrf_cookies=True,
            autoreload=True,
            debug=True,
            )
    application.listen(tornado.options.options.port)
    tornado.ioloop.IOLoop.instance().start()
    #tornado.ioloop.IOLoop.instance().stop()
