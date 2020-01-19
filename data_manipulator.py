import json
from collections import namedtuple
from datetime import time, timedelta, datetime
# meetings = []
with open('src/assets/data/meetings.json', 'r') as json_file:
    meetings = json.loads(json_file.read())

new_meetings = meetings.copy()

for meeting in meetings:
    meeting.pop('id')

print(json.dumps(meetings))