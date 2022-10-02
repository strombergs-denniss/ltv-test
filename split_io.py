import csv

data = []

with open('./data/io.csv', 'r', newline='') as csvfile:
    spamreader = csv.reader(csvfile, delimiter=',', quotechar='"')

    for row in spamreader:
        if row[3] == 'Latvia':
            data.append(row)

with open('./data/io-latvia.csv', 'w', newline='') as csvfile:
    spamwriter = csv.writer(csvfile, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    for row in data:
        spamwriter.writerow(row)
