import json
from collections import namedtuple
from datetime import time, timedelta, datetime
# meetings = []
with open('src/assets/data/meetings.json', 'r') as json_file:
    meetings = json.loads(json_file.read())

new_meetings = meetings.copy()

for meeting in meetings:
    new_tags = []
    tags = meeting['tags']
    for tag in tags:
        if tag['visible']:
            new_tags.append(tag['tag'])

    meeting['tags'] = new_tags

print(json.dumps(meetings))