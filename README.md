# Folder Structure
# !!!

- src/assets - self explanatory
- src/api - everything related to the api mainly the interfaces and calls
- src/components - this is for components than will be used throughout the whole project
- src/data - this could be used for storing some hard coded values maybe in a json format
- src/features/Event - as I understood it, here is where you would have everything specific to an event or events. You can have it in one place unlike if you would have things for events in events page and things for event in event page. I think it could be great to use it
- src/features/Event/components - this will contain every component that is related only to event
- src/features/Event/index.ts - you import everything regarding event from here (encaptulation)
- src/hooks - contain hooks that are gonna be used throughout the whole project
- src/lib - everything to do with setting up libraries and stuff like I did with axios.config.ts file
- src/pages - self explanatory
- src/utils - some functions that we might need that are not a component or a hook. Like for example making an image black and white.
