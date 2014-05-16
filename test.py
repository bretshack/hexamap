import os
import urllib
import jinja2
import webapp2



JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):

        template = jinja_environment.get_template('index.html')
        self.response.out.write(template.render())

        

application = webapp2.WSGIApplication([
    ('/', MainPage),
], debug=True)