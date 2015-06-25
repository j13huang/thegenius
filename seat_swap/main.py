import os.path
import tornado.ioloop
import tornado.web
import tornado.options

import uuid
import logging

class MainHandler(tornado.web.RequestHandler):

    def initialize(self, players, straight):
        self.players = players
        self.straight = straight

    def get(self):
        #self.write("Hello, world")
        self.render('index.html', actions=[], players=self.players, straightLength=self.straight)

class NewPlayerHandler(tornado.web.RequestHandler):
    def post(self):
        full_name = self.get_argument('fullName')
        color = self.get_argument('color')
        player = {
            'id': str(uuid.uuid4()),
            'fullName': full_name,
            'color': color,
        }
        #output = self.render_string('addPlayer.html', player=player)

        #logging.info(self.get_argument('next', None))
        #logging.info(player)
        if self.get_argument("next", None):
            self.redirect(self.get_argument("next"))
        else:
            self.write(player)
        #self.redirect(self.get_argument('next'))

class UpdatePlayersHandler(tornado.web.RequestHandler):
    def post(self):
        pass

if __name__ == '__main__':
    GAME_GROUP = 'game'
    tornado.options.define("port", default=8888, type=int)
    tornado.options.define("players", default=11, type=int, group=GAME_GROUP)
    tornado.options.define("straight", default=5, type=int, group=GAME_GROUP)
    tornado.options.parse_command_line()
    args = tornado.options.options.group_dict(GAME_GROUP)
    players = tornado.options.options.players
    straight = tornado.options.options.straight

    application = tornado.web.Application(
            [
                tornado.web.url(r'/seat_swap', MainHandler, {'players':players, 'straight':straight}),
                (r'/seat_swap/player/new', NewPlayerHandler),
                (r'/seat_swap/players/update', UpdatePlayersHandler),
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
