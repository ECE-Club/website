# updates team.js in /src/data, which is for the meet the team page
import pandas as pd
import os.path
raw_data = pd.read_excel("./2t5_2t6_roster.xlsx", sheet_name="Sheet1")

images = "../../public/imgs/2t5_2t6_pics" # file path of the compressed images

new_data = {} # the updated team.js output
no_image = "placeholder.png" # placeholder image

for index, row in raw_data.iterrows():
    name = row["Name"]
    position = row["Position"]
    year = row["Year"]
    mail = row["UTMail"]
    discord = row["Discord (@)"]
    instagram = row["Instagram (@)"]

    if type(name) == str and len(name) > 2:

        indivData = {}
        if os.path.isfile(images + "/" + name.replace(" ", "") + ".webp"):
            indivData["picture"] = "filepath + " + name.replace(" ", "") + ".webp"
        else:
            print("No headshot: " + name)
            indivData["picture"] = "filepath + " + no_image
        indivData["name"]= name
        indivData["role"] = position
        indivData["year"] = year

        indivData["contact"] = []
        if (type(mail) == str and len(mail) > 2):
            indivData["contact"].append("E-mail: " + mail)
        if (type(discord) == str and len(discord) > 2):
            indivData["contact"].append("Discord: " + discord)
        if (type(instagram) == str and len(instagram) > 2):
            indivData["contact"].append("Instagram: " + instagram)

        # update the obj
        new_data[len(new_data)] = indivData

import json

with open('data.json', 'w') as fp:
    # i'm too lazy to make this output to real js code
    # so just copy paste this into team.js LMAO
    json.dump(new_data, fp)