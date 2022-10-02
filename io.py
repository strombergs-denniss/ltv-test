# "VAR",
# "Variable",
# "COU",
# "Country",
# "ROW",
# "From: (sector in row)",
# "COL",
# "To: (sector in column)",
# "TIME",
# "Time",
# "Unit Code",
# "Unit",
# "PowerCode Code",
# "PowerCode",
# "Reference Period Code",
# "Reference Period",
# "Value",
# "Flag Codes",
# "Flags"

import csv

with open('./data/io_latvia.csv', 'r', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in spamreader:
        # if row[5] == 'Agriculture, forestry and fishing' and row[8] == '2015':

        if row[4] == 'VALU' and (row[8] == '2015' or row[9] == '2015'):
            print(row)
        # 

        # if row[5] == 'Agriculture, forestry and fishing' and row[8] == '2015':
        #     # print(row[7])
        #     print(row[4])

        # value = row[16]
