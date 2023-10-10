# import necessary libraries
# from models import create_classes
import os
import pandas as pd
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, or_
from sqlalchemy.ext.automap import automap_base

from pandas_geojson import to_geojson
import pickle

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)
import sqlite3
con = sqlite3.connect("basketball.sqlite")
cur = con.cursor()
NBAquery = cur.execute("SELECT * FROM 'NBAStadiums'").fetchall()
engine = create_engine("sqlite:///basketball.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
print(Base.classes.keys())

nba_stadiums = Base.classes.NBAstadiums
teams = Base.classes.teams_info
ranking = Base.classes.ranking

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


# ---------------------------------------------------------
# Web site
@app.route("/")
def home():
    return render_template("index.html")


@app.route("/players")
def players_df():
    return render_template("players.html")

@app.route("/stadiums")
def stadiums():
    # Create our session (link) from Python to the DB
    # session = Session(engine)
    NBA_stadiums = pd.DataFrame(NBAquery,columns=['Team','League','Division','Lat','Long','ID'])

    geo_json = to_geojson(df=NBA_stadiums, lat='Lat', lon='Long',
                 properties=['Team','League','Division'])

    # session.close()

   

    return jsonify(geo_json)






if __name__ == "__main__":
    app.run()
