# -*- coding: utf-8 -*-
"""
@author: Olayinka Otuniyi
Created on Wed Dec 18 07:48:00 2019
"""
#!/usr/bin/env python
import platform
from os import path, walk
from templates import app

# Load this config object for development mode
app.config.from_object('config.DevelopmentConfig')


def before_request():
    app.jinja_env.cache = {}

if platform.system() == "Linux":
    app.before_request(before_request)
    app.run(host='localhost', port=5000,
            debug=True)
elif platform.system() == "Windows":
    app.before_request(before_request)
    app.run(host='localhost', port=2020,
            debug=True)
