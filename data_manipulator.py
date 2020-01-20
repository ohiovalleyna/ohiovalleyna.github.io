import json
from collections import namedtuple
from datetime import time, timedelta, datetime
# meetings = []
with open('src/assets/data/meetings.json', 'r') as json_file:
    meetings = json.loads(json_file.read())

new_meetings = meetings.copy()
dict_meetings = {}

for meeting in meetings:
    dayOfWeek = meeting.pop('dayOfWeek')

    if dayOfWeek not in dict_meetings:
        dict_meetings[dayOfWeek] = []

    dict_meetings[dayOfWeek].append(meeting)

print(json.dumps(dict_meetings))