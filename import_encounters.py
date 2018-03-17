import json


def convert_to_json():
    lines = []
    with open('./encounters.csv') as f:
        for line in f.readlines():
            lines.append(line.strip().replace('â€”', ' ').replace('â€“', '-').split(','))

    encounters = []
    for line in lines:
        encounter = {'name': line[0]}
        for i in range(1, 10):
            if line[i] != ' ':
                high = None

                if '-' in line[i]:
                    low, high = line[i].split('-')
                else:
                    low = line[i]

                if low == '00':
                    low = '100'
                elif high == '00':
                    high = '100'
                
                if i == 1:
                    encounter['beach'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 2:
                    encounter['no_undead'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 3:
                    encounter['lesser_undead'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 4:
                    encounter['greater_undead'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 5:
                    encounter['mountains'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 6:
                    encounter['rivers'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 7:
                    encounter['ruins'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 8:
                    encounter['swamp'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
                elif i == 9:
                    encounter['wasteland'] = list(range(int(low), int(high) + 1)) if high else [int(low)]
        encounters.append(encounter)
    return encounters

if __name__ == '__main__':
    encounters = convert_to_json()
    with open('./src/data/encounters.json', 'w+') as f:
        print(json.dumps(encounters), file=f)